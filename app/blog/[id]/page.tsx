import { Suspense } from 'react';
import { cacheLife, cacheTag } from 'next/cache';

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

async function BlogContent({ id }: { id: string }) {
  'use cache';
  cacheLife('seconds');
  cacheTag(`blog-post-${id}`);

  return (
    <>
      <h1>Blog Post #{id}</h1>
      <p>
        <code>&apos;use cache&apos;</code> + <code>cacheLife(&apos;seconds&apos;)</code> +{' '}
        <code>cacheTag(&apos;blog-post-{id}&apos;)</code>
      </p>
      <p>
        Tests the new Next.js 16 caching model: dynamic route caching + tag
        mapping via TableStore. The <code>cacheTag()</code> call enables
        on-demand revalidation through <code>revalidateTag()</code>.
      </p>
      <p>Generated at: {new Date().toISOString()}</p>
      <a href="/blog">← Back to blog</a>
    </>
  );
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main style={{ padding: '2rem' }}>
      <Suspense fallback={<p>Loading...</p>}>
        <BlogContent id={id} />
      </Suspense>
    </main>
  );
}
