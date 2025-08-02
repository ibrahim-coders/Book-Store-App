'use client';

import AuthorSlider from './components/AuthorSlider';
import { Hero } from './components/Hero';
import NewsSection from './components/NewsSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <AuthorSlider />
      <NewsSection />
    </div>
  );
}
