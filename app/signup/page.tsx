'use client';

import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SignInButton, SignedOut } from '@clerk/nextjs';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side – Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
          alt="Woman reading books"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <BookOpen className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">
              Welcome Back to BookNest
            </h1>
            <p className="text-xl opacity-90">
              Discover your next favorite book
            </p>
          </div>
        </div>
      </div>

      {/* Right Side – Clerk Login */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          {/* Logo (Mobile View) */}
          <div className="lg:hidden flex justify-center mb-4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-blue-900"
            >
              <BookOpen className="h-10 w-10" />
              <span className="text-3xl font-bold">BookNest</span>
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Or{' '}
            <Link
              href="/sign-up"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              create a new account
            </Link>
          </p>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
                Sign In with Clerk
              </button>
            </SignInButton>
          </SignedOut>

          <div className="mt-6">
            <Link
              href="/"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              ← Back to BookNest
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
