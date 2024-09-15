'use client';

import { ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export default function GoBackButton() {
  const router = useRouter();

  return (
    <Button
      className="mb-4 text-sm flex items-center p-0"
      variant="link"
      onClick={() => {
        router.back();
      }}
    >
      <ChevronLeft className="w-4 h-4 mr-2" />
      <span>Back</span>
    </Button>
  );
}
