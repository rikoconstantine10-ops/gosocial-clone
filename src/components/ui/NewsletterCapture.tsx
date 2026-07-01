'use client';
import { useState } from 'react';

interface NewsletterCaptureProps {
  title?: string;
  description?: string;
  source?: string;
}

export function NewsletterCapture({ title = 'Newsletter', description = 'Subscribe untuk update terbaru.', source = 'default' }: NewsletterCaptureProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#f9fafb' }}>{title}</h3>
      <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '1.25rem' }}>{description}</p>
      {status === 'success' ? (
        <p style={{ color: '#34d399', fontWeight: 600 }}>Terima kasih! Email Anda sudah terdaftar.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email Anda"
            required
            style={{ padding: '0.625rem 1rem', borderRadius: '0.5rem', border: '1px solid #374151', background: '#111827', color: '#f9fafb', fontSize: '0.875rem', flex: '1', minWidth: '200px' }}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{ padding: '0.625rem 1.25rem', borderRadius: '0.5rem', background: '#3b82f6', color: '#fff', fontWeight: 600, fontSize: '0.875rem', border: 'none', cursor: 'pointer' }}
          >
            {status === 'loading' ? 'Mengirim...' : 'Daftar'}
          </button>
        </form>
      )}
      {status === 'error' && <p style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.5rem' }}>Gagal mendaftar. Silakan coba lagi.</p>}
    </div>
  );
}
