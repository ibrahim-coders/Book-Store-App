'use client';

import { useEffect } from 'react';
import { useUser, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (isSignedIn) {
      fetch('/api/users', {
        method: 'POST',
      });
    }
    router.push('/');
  }, [isSignedIn, router]);

  return (
    <>
      <SignedIn></SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
