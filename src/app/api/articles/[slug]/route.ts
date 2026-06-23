import { NextResponse } from "next/server";

const DB_PATH = "/home/ubuntu/articel generator/data.db";

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const Database = require("better-sqlite3");
    const db = new Database(DB_PATH, { readonly: true });
    // Try by slug first, then by id
    let article = db.prepare(`
      SELECT id, title, slug, keyword, meta_description, content_html, word_count,
             focus_keyword, secondary_keywords, created_at, published_date, status, image_alt_text
      FROM articles
      WHERE slug = ? AND status IN ('draft','published')
    `).get(slug) as any;

    if (!article) {
      const id = parseInt(slug);
      if (!isNaN(id)) {
        article = db.prepare(`
          SELECT id, title, slug, keyword, meta_description, content_html, word_count,
                 focus_keyword, secondary_keywords, created_at, published_date, status, image_alt_text
          FROM articles WHERE id = ? AND status IN ('draft','published')
        `).get(id) as any;
      }
    }
    db.close();

    if (!article) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(article);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
