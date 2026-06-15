import { Suspense } from 'react';
import { connection } from 'next/server';
import { cacheLife } from 'next/cache';

async function StaticContent() {
  'use cache';
  cacheLife('max');

  return (
    <div
      style={{
        padding: '1rem',
        background: '#e3f2fd',
        borderRadius: '8px',
        border: '1px solid #90caf9',
        marginBottom: '1rem',
      }}
    >
      <h3 style={{ margin: '0 0 0.5rem' }}>Cached Section (use cache)</h3>
      <p>
        This content uses <code>&apos;use cache&apos;</code> + <code>cacheLife(&apos;max&apos;)</code>.
        Prerendered and served from cache.
      </p>
      <p>Cached at: {new Date().toISOString()}</p>
    </div>
  );
}

async function DynamicClock() {
  await connection();

  return (
    <div
      style={{
        padding: '1rem',
        background: '#e8f5e9',
        borderRadius: '8px',
        border: '1px solid #a5d6a7',
      }}
    >
      <h3 style={{ margin: '0 0 0.5rem' }}>Dynamic Section (streamed)</h3>
      <p>Server time: {new Date().toISOString()}</p>
      <p style={{ fontSize: '0.875rem', color: '#666' }}>
        No <code>&apos;use cache&apos;</code> — rendered at request time via{' '}
        <code>connection()</code>. Streamed in after the static shell.
      </p>
    </div>
  );
}

export default function PPRTestPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Partial Prerendering Test</h1>
      <p style={{ color: '#666' }}>Next.js 16 — Cache Components + PPR</p>

      <Suspense fallback={<p>Loading cached content...</p>}>
        <StaticContent />
      </Suspense>

      <Suspense
        fallback={
          <div
            style={{
              padding: '1rem',
              background: '#f5f5f5',
              borderRadius: '8px',
              border: '1px dashed #bdbdbd',
            }}
          >
            <p>Loading dynamic content...</p>
          </div>
        }
      >
        <DynamicClock />
      </Suspense>

      <div style={{ marginTop: '1rem', padding: '1rem', background: '#fff3e0', borderRadius: '8px', border: '1px solid #ffcc80' }}>
        <h3 style={{ margin: '0 0 0.5rem' }}>How PPR Works in Next.js 16</h3>
        <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
          <li>Blue section: <code>&apos;use cache&apos;</code> component — prerendered and cached</li>
          <li>Green section: dynamic component — streamed at request time</li>
          <li>No experimental flags needed — <code>cacheComponents: true</code> enables PPR</li>
          <li>Static shell + dynamic streaming = Partial Prerendering</li>
        </ul>
      </div>
    </main>
  );
}
