import { connection } from 'next/server';

export default async function DynamicPage() {
  await connection();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Dynamic (SSR)</h1>
      <p>
        No <code>&apos;use cache&apos;</code> directive — server-rendered on
        every request. With <code>cacheComponents: true</code>, pages are
        dynamic by default. Uses <code>connection()</code> to signal dynamic rendering.
      </p>
      <p>Current time: {new Date().toISOString()}</p>
    </main>
  );
}
