import { NextResponse } from "next/server";
import Database from "better-sqlite3";
import path from "path";

const DB_PATH = "/home/ubuntu/articel generator/data.db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "12");
  const category = searchParams.get("category") || null;
  const offset = (page - 1) * limit;

  try {
    const db = new Database(DB_PATH, { readonly: true });

    const whereBase = `WHERE status IN ('draft','published') AND content_html IS NOT NULL AND content_html != ''`;
    const categoryFilter = category ? ` AND category = ?` : '';
    const params: any[] = category ? [category, limit, offset] : [limit, offset];
    const countParams: any[] = category ? [category] : [];

    const articles = db.prepare(`
      SELECT id, title, slug, keyword, meta_description, word_count,
             focus_keyword, secondary_keywords, category, tags,
             image_alt_text, created_at, published_date, status
      FROM articles
      ${whereBase}${categoryFilter}
      ORDER BY id DESC
      LIMIT ? OFFSET ?
    `).all(...params) as any[];

    const total = (db.prepare(`
      SELECT COUNT(*) as n FROM articles
      ${whereBase}${categoryFilter}
    `).get(...countParams) as any).n;

    // Get all unique categories for filter UI
    const categories = (db.prepare(`
      SELECT DISTINCT category FROM articles
      ${whereBase}
      AND category IS NOT NULL AND category != ''
      ORDER BY category ASC
    `).all() as any[]).map((r: any) => r.category);

    db.close();

    // Parse tags JSON string to array
    const parsed = articles.map((a: any) => ({
      ...a,
      tags: (() => { try { return JSON.parse(a.tags || '[]'); } catch { return []; } })()
    }));

    return NextResponse.json({ articles: parsed, total, page, limit, categories });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
