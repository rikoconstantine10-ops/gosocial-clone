import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Blog Nuswa Lab';
  const category = searchParams.get('category') || 'Digital Marketing';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          background: 'linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 60%, #3d5c3d 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: '#5C7A5A', borderRadius: '8px', padding: '6px 14px', color: '#d4e4d4', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
            {category}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ color: 'white', fontSize: title.length > 60 ? '36px' : '44px', fontWeight: 800, lineHeight: 1.2, maxWidth: '900px' }}>
            {title}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#5C7A5A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '18px' }}>N</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}>Nuswa Lab</span>
              <span style={{ color: '#9ab89a', fontSize: '14px' }}>Digital Marketing Agency Solo</span>
            </div>
          </div>
        </div>
        <div style={{ color: '#9ab89a', fontSize: '18px', fontWeight: 600 }}>nuswalab.com/blog</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
