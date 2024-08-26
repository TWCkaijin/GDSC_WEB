import { Button } from './ui/button';

export default function BlogCard() {
  return (
    <div className="border border-slate-200 rounded-lg p-4 w-full">
      <p className="text-slate-500 text-sm"> May 23rd, 2024</p>
      <h1 className="text-xl text-sky-500 font-bold mb-2">Lorem Ipsum</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
        accumsan nulla, a commodo urna. Suspendisse cursus nulla vitae eros
        eleifend, sit amet tincidunt nulla varius.
      </p>
      <Button className="w-full" variant="secondary">
        Read more
      </Button>
    </div>
  );
}
