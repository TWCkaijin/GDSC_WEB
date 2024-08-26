import BlogCard from '@/components/blog-card';

export default function Page() {
  return (
    <main className="relative py-8 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Latest Activities</h1>
      <div className="grid grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <BlogCard key={i} />
        ))}
      </div>
    </main>
  );
}
