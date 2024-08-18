'use client';

import { useSession } from 'next-auth/react';

export default function Page() {
  const session = useSession();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <h2>Session</h2>
      <code>{JSON.stringify(session)}</code>
    </div>
  );
}
