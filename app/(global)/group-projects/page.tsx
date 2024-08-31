import BlogCard from '@/components/blog-card';

export default function Page() {
  return (
    <main className="relative py-4 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-12">Latest Projects</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 9, 8, 10].map((item, i) => (
          <BlogCard key={i} />
        ))}
      </div>
    </main>
  );
}
