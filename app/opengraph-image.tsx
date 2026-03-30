import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'David Jones — AI Systems Strategist';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, color: '#d4af37', textAlign: 'center', lineHeight: 1.1 }}>
          Coach David Jones
        </div>
        <div style={{ fontSize: 28, color: '#e0e0e0', marginTop: 24, textAlign: 'center', maxWidth: 800 }}>
          AI Systems Strategist &amp; Marketing Architect
        </div>
      </div>
    ),
    { ...size }
  );
}
