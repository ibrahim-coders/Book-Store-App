'use client';

import { useState, useEffect } from 'react';
import { BookOpen, ShoppingCart, Menu, X, UserPlus, LogIn } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = 3;
  const { isSignedIn, user } = useUser(); // Clerk hook

  // 👉 Log user info in console
  useEffect(() => {
    if (isSignedIn) {
      console.log('🔐 Logged in user:', user);
    } else {
      console.log('🚫 No user is signed in.');
    }
  }, [isSignedIn, user]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-blue-900">
            <BookOpen className="h-8 w-8" />
            <p className="text-2xl font-bold">
              Book
              <span className="text-2xl font-bold text-emerald-500">Store</span>
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {['/', '/books', '/bestsellers', '/about'].map((path, index) => {
              const labels = ['Home', 'Books', 'Bestsellers', 'About'];
              return (
                <Link
                  key={index}
                  href={path}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {labels[index]}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <div className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs p-0">
                  {cartItemCount}
                </div>
              )}
            </Button>

            <SignedIn>
              <UserButton userProfileUrl="/dashboard" />
              <Button className="bg-emerald-500 hover:bg-emerald-600 ">
                <Link href="/book-dashboard">Deshboard</Link>
              </Button>
            </SignedIn>

            <SignedOut>
              <div className="hidden md:flex items-center space-x-2">
                {/* signin */}
                <Link href="/signin">
                  <Button variant="outline" size="sm">
                    <LogIn className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Sign Up
                  </Button>
                </Link>
              </div>
            </SignedOut>

            {/* Mobile menu button */}
            <Button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t p-4 z-50 shadow-lg  ">
            <nav className="flex flex-col space-y-2">
              {['/', '/books', '/bestsellers', '/about'].map((path, index) => {
                const labels = ['Home', 'Books', 'Bestsellers', 'About'];
                return (
                  <Link
                    key={index}
                    href={path}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {labels[index]}
                  </Link>
                );
              })}

              <SignedOut>
                <div className="pt-3 border-t space-y-2">
                  <Link href="/signin" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full justify-start">
                      <LogIn className="h-4 w-4 mr-2" />
                      Sign In
                    </Button>
                  </Link>

                  <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full justify-start">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </SignedOut>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
