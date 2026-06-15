'use cache';

import { cacheLife, cacheTag } from 'next/cache';
import { RevalidateActions } from './actions';

export default async function RevalidateDemoPage() {
  cacheLife('hours');
  cacheTag('time-data');

  return (
    <main style={{ padding: '2rem', maxWidth: '800px' }}>
      <h1>Revalidate Demo</h1>
      <p style={{ color: '#666' }}>
        Next.js 16 — on-demand revalidation via <code>revalidateTag</code> and{' '}
        <code>revalidatePath</code>, using the{' '}
        <code>&apos;use cache&apos;</code> directive.
      </p>

      <section
        style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#e8f5e9',
          borderRadius: '8px',
          border: '1px solid #a5d6a7',
        }}
      >
        <h2 style={{ margin: '0 0 1rem' }}>Tag Revalidation</h2>
        <p>
          This page uses <code>&apos;use cache&apos;</code> +{' '}
          <code>cacheTag(&quot;time-data&quot;)</code>.
        </p>
        <div
          style={{
            padding: '1rem',
            background: 'white',
            borderRadius: '4px',
            marginTop: '0.5rem',
          }}
        >
          <p>
            <strong>Time data:</strong> {new Date().toISOString()}
          </p>
        </div>
      </section>

      <section
        style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#e3f2fd',
          borderRadius: '8px',
          border: '1px solid #90caf9',
        }}
      >
        <h2 style={{ margin: '0 0 1rem' }}>Path Revalidation</h2>
        <div
          style={{
            padding: '1rem',
            background: 'white',
            borderRadius: '4px',
            marginTop: '0.5rem',
          }}
        >
          <p>
            <strong>Page rendered at:</strong> {new Date().toISOString()}
          </p>
        </div>
      </section>

      <RevalidateActions />

      <section
        style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: '#fff3e0',
          borderRadius: '8px',
          border: '1px solid #ffcc80',
        }}
      >
        <h2 style={{ margin: '0 0 1rem' }}>API Routes</h2>
        <ul style={{ lineHeight: 2 }}>
          <li>
            <code>POST /api/revalidate?tag=time-data</code>
          </li>
          <li>
            <code>POST /api/revalidate?path=/revalidate-demo</code>
          </li>
        </ul>
      </section>
    </main>
  );
}
