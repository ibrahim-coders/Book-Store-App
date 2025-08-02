'use client';

import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function SignUpPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side - Library Image */}
      <div className="relative hidden md:block">
        <Image
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80"
          alt="Library Books"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
          <h2 className="text-white text-4xl lg:text-5xl font-bold text-center leading-tight">
            Explore Books
          </h2>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="flex items-center justify-center p-6 sm:p-10 bg-gray-50">
        <div className="w-full max-w-md space-y-6">
          <SignUp path="/signup" />
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:underline text-sm font-medium"
            >
              <Home className="w-4 h-4 mr-1" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
