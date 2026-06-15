'use cache';

import { cacheLife } from 'next/cache';

export default async function Home() {
  cacheLife('minutes');

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Home (use cache — cacheLife: minutes)</h1>
      <p>Next.js 16 + React 19 — Powered by Little River</p>
      <p>Built at: {new Date().toISOString()}</p>
      <p>
        Next.js 16 replaces <code>export const revalidate</code> with the{' '}
        <code>&apos;use cache&apos;</code> directive + <code>cacheLife()</code>.
        This tests the new caching model through the Gateway OSS proxy.
      </p>
    </main>
  );
}
