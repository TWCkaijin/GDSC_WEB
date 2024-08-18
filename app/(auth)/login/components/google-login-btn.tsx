'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export default function GoogleLoginButton() {
  return (
    <Button variant="outline" className="flex items-center space-x-2">
      <Icons.google className="w-5 h-5" />
      <span>Google</span>
    </Button>
  );
}
