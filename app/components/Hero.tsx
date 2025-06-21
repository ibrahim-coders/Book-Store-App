'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import javascript from '../../public/javascript.jpg';
import react from '../../public/react.jpg';
import typeScript from '../../public/typescript.webp';
import next from '../../public/next.webp';

export const Hero = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djIwaDE2VjM0SDM2ek0yMCAyMHYyMGgxNlYyMEgyMHpNNCA0djIwaDE2VjRINHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <motion.div
            className="space-y-8"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to
                <span className="block text-amber-400">Book Store</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover your next favorite book in our carefully curated
                collection. From bestsellers to hidden gems, find stories that
                inspire, educate, and entertain.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold px-8 py-3 rounded-lg">
                <Link href="/" className="flex items-center">
                  Browse Books
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-white text-blue-900 px-8 py-3 rounded-lg"
              >
                Featured Collections
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-amber-400" />
                </div>
                <div className="text-2xl font-bold">
                  <CountUp end={10000} duration={2} separator="," />+
                </div>
                <div className="text-blue-200 text-sm">Books Available</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-amber-400" />
                </div>
                <div className="text-2xl font-bold">
                  <CountUp end={50000} duration={2} separator="," />+
                </div>
                <div className="text-blue-200 text-sm">Happy Readers</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-amber-400" />
                </div>
                <div className="text-2xl font-bold">4.8★</div>
                <div className="text-blue-200 text-sm">Average Rating</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            className="relative"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-[350px]">
                  <Image
                    src={javascript}
                    alt="JavaScript Book"
                    className="h-full w-full object-cover rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                  />
                </div>
                <div className="h-[350px]">
                  <Image
                    src={react}
                    alt="React Book"
                    className="h-full w-full object-cover rounded-lg shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-[350px]">
                  <Image
                    src={typeScript}
                    alt="TypeScript Book"
                    className="h-full w-full object-cover rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                  />
                </div>
                <div className="h-[350px]">
                  <Image
                    src={next}
                    alt="Next.js Book"
                    className="h-full w-full object-cover rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
