'use cache';

export default async function About() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>About Us</h1>
      <p>
        Static page using <code>&apos;use cache&apos;</code> — tests pre-render
        cache upload via CLI.
      </p>
    </main>
  );
}
