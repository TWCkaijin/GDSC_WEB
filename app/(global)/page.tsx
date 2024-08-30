'use client';

import { LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  router.push('/activities');

  return (
    <main className="min-h-[70vh] flex items-center justify-center">
      <LoaderCircle className="w-8 h-8 animate-spin" />
    </main>
  );
}
