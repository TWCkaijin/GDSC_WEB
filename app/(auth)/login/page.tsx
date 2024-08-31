'use client';

import Image from 'next/image';
import SeparatorWithText from '@/components/separator-with-text';
import LoginForm from './components/login-form';
import GoogleLoginButton from './components/google-login-btn';
import SparklesText from '@/components/magicui/sparkles-text';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const session = useSession();
  const router = useRouter();

  if (Boolean(session?.data?.user)) {
    router.push('/activities');
    return;
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="text-center flex flex-col items-center justify-center">
        <Image
          src={'/logo.svg'}
          width={100}
          height={100}
          alt="GDSC-NSYSU-logo"
          className="mb-8 block lg:hidden"
        />
        <SparklesText
          text="Welcome back!"
          className="text-3xl font-semibold"
          sparklesCount={3}
        />
        <p className="text-sm text-muted-foreground">
          Enter your email and password below to login
        </p>
      </div>
      <LoginForm />
      <SeparatorWithText text="Or continue with" />
      <GoogleLoginButton />
    </div>
  );
}
