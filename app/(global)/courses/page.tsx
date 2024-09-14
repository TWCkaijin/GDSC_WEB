import BlogCard from '@/components/blog/blog-card';
import { getPosts } from '@/sanity/sanity-utils';

export default async function Page() {
  const posts = await getPosts();

  return (
    <main className="relative py-4 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-12">Latest Courses</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {posts?.length > 0 ? (
          posts.map((post: any) => <BlogCard key={post._id} blog={post} />)
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </main>
  );
}
