import { Button } from './ui/button';

export default function BlogCard() {
  return (
    <div className="border border-slate-200 rounded-lg p-4 w-full">
      <p className="text-slate-500 text-sm"> May 23rd, 2024</p>
      <h1 className="text-xl text-sky-500 font-bold mb-2">Next.js 15 RC</h1>
      <p className="mb-4">
        The Next.js 15 Release Candidate (RC) is now available. This early
        version allows you to test the latest features before the upcoming
        stable release.
      </p>
      <Button className="w-full" variant="secondary">
        Read more
      </Button>
    </div>
  );
}
