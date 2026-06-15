'use cache';

import { cacheLife } from 'next/cache';

interface Post {
  id: number;
  title: string;
}

async function getPosts(): Promise<Post[]> {
  return [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' },
    { id: 3, title: 'Third Post' },
  ];
}

export default async function BlogPage() {
  cacheLife('seconds');

  const posts = await getPosts();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Blog (use cache — cacheLife: seconds)</h1>
      <p>Tests incremental cache with tag associations using the new caching model.</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
