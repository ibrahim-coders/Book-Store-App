'use client';

import { useEffect } from 'react';
import { useUser, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && isSignedIn) {
      fetch('/api/users', {
        method: 'POST',
      });
      router.push('/');
    }
  }, [isSignedIn, router]);

  return (
    <>
      <SignedIn>
        {/* Render dashboard content here */}
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
