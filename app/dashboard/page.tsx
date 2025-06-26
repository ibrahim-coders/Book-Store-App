'use client';

import { useEffect } from 'react';
import { useUser, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

export default function DashboardPage() {
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      fetch('/api/users', {
        method: 'POST',
      });
    }
  }, [isSignedIn]);

  return (
    <>
      <SignedIn>
        <div className="p-6">
          <h1 className="text-3xl font-bold">📚 Welcome to Your Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Here you can manage your account, orders, and more.
          </p>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
