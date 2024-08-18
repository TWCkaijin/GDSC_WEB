'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { firebaseAuth } from '@/lib/firebase';
import {
  AuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { signIn } from 'next-auth/react';

const googleProvider = new GoogleAuthProvider();

export default function GoogleLoginButton() {
  const handleOAuthSignIn = (provider: AuthProvider) => {
    signInWithPopup(firebaseAuth, provider)
      .then(credential => credential.user.getIdToken(true))
      .then(idToken => {
        signIn('credentials', {
          idToken,
          callbackUrl: '/dashboard',
        });
      })
      .catch(err => console.error(err));
  };

  return (
    <Button
      variant="outline"
      className="flex items-center space-x-2"
      onClick={() => handleOAuthSignIn(googleProvider)}
    >
      <Icons.google className="w-5 h-5" />
      <span>Google</span>
    </Button>
  );
}
