'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

type Author = {
  name: string;
  books: number;
  image: string;
};

const authors: Author[] = [
  {
    name: 'Leslie Alexander',
    books: 5,
    image: '/authors/1.jpg',
  },
  {
    name: 'Guy Hawkins',
    books: 12,
    image: '/authors/2.jpg',
  },
  {
    name: 'Esther Howard',
    books: 10,
    image: '/authors/3.jpg',
  },
  {
    name: 'Shikhon Islam',
    books: 7,
    image: '/authors/4.jpg',
  },
  {
    name: 'Kawser Ahmed',
    books: 4,
    image: '/authors/5.jpg',
  },
  {
    name: 'Brooklyn Simmons',
    books: 15,
    image: '/authors/6.jpg',
  },
];

export default function AuthorSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-3xl font-bold text-slate-800">Featured Author</h2>
      <p className="text-gray-500 mt-2 mb-6 max-w-xl mx-auto">
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at
        nulla nulla. Duis posuere ex lacus.
      </p>

      <div className="relative">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-cyan-900 text-white p-3 rounded-full shadow"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-cyan-900 text-white p-3 rounded-full shadow"
        >
          <ChevronRight />
        </button>

        {/* Scrollable List */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-6 scrollbar-hide scroll-smooth"
        >
          {authors.map((author, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-64 bg-white rounded-xl shadow p-6 text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={author.image}
                  alt={author.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover border-4 border-yellow-400"
                />
                <div className="absolute inset-0 rounded-full border-[5px] border-yellow-400 opacity-30"></div>
              </div>
              <h4 className="font-semibold text-lg text-slate-800">
                {author.name}
              </h4>
              <p className="text-sm text-gray-500">
                {author.books.toString().padStart(2, '0')} Published Books
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
