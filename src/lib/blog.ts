import fs from 'fs';
import path from 'path';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  metaDescription: string;
  focusKeyword: string;
  content: string;
  wordCount: number;
  qcScore: number;
  aeoScore: number;
  geoScore: number;
  publishedAt: string;
  updatedAt: string;
  category?: string;
  tags?: string[];
  featuredImage?: string;
  excerpt?: string;
  readTime?: number;
}

const BLOG_DIR = path.join(process.cwd(), 'src/data/blog');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.json'));
  return files
    .map(file => {
      const raw = JSON.parse(fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8'));
      const textContent = raw.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      return {
        ...raw,
        excerpt: raw.metaDescription || textContent.substring(0, 160),
        readTime: Math.ceil((raw.wordCount || textContent.split(/\s+/).length) / 200)
      };
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const textContent = raw.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return {
    ...raw,
    excerpt: raw.metaDescription || textContent.substring(0, 160),
    readTime: Math.ceil((raw.wordCount || textContent.split(/\s+/).length) / 200)
  };
}

export function getRelatedPosts(currentSlug: string, keyword: string, limit = 3): BlogPost[] {
  return getAllPosts()
    .filter(p => p.slug !== currentSlug)
    .filter(p =>
      p.focusKeyword?.toLowerCase().includes(keyword?.split(' ')[0]?.toLowerCase() || '') ||
      p.title.toLowerCase().includes(keyword?.split(' ')[0]?.toLowerCase() || '')
    )
    .slice(0, limit);
}

export function extractHeadings(html: string): { id: string; text: string }[] {
  const matches = [...html.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)];
  return matches.map(m => {
    const text = m[1].replace(/<[^>]+>/g, '');
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return { id, text };
  });
}

export function extractFAQs(html: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const h2Matches = [...html.matchAll(/<h2[^>]*>(.*?)<\/h2>\s*(<p[^>]*>.*?<\/p>)/gis)];
  for (const m of h2Matches) {
    const question = m[1].replace(/<[^>]+>/g, '').trim();
    if (question.includes('?')) {
      const answer = m[2].replace(/<[^>]+>/g, '').trim();
      if (answer) faqs.push({ question, answer });
    }
  }
  return faqs;
}
