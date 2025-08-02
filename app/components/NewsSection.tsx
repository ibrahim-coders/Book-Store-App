import Image from 'next/image';
import { CalendarDays, User } from 'lucide-react';

type Blog = {
  title: string;
  date: string;
  author: string;
  image: string;
  category: string;
};

const blogs: Blog[] = [
  {
    title: 'Montes Suspendisse Massa Curae Malesuada',
    date: 'Feb 10, 2024',
    author: 'Admin',
    image: '/blogs/1.jpg',
    category: 'Activities',
  },
  {
    title: 'Playful Picks Paradise: Kids’ Essentials With Dash.',
    date: 'Mar 20, 2024',
    author: 'Admin',
    image: '/blogs/2.jpg',
    category: 'Activities',
  },
  {
    title: 'Tiny Emporium: Playful Picks For Kids’ Delightful Days.',
    date: 'Jun 14, 2024',
    author: 'Admin',
    image: '/blogs/3.jpg',
    category: 'Activities',
  },
  {
    title: 'Eu Parturient Dictumst Fames Quam Tempor',
    date: 'Mar 12, 2024',
    author: 'Admin',
    image: '/blogs/4.jpg',
    category: 'Activities',
  },
];

export default function NewsSection() {
  return (
    <section className="bg-blue-50 py-12 px-4 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800">Our Latest News</h2>
        <p className="text-gray-500 mt-2">
          Interdum et malesuada fames ac ante ipsum primis in faucibus. <br />
          Donec at nulla nulla. Duis posuere ex lacus
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="relative">
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-cyan-700 text-white text-xs px-3 py-1 rounded">
                {blog.category}
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center text-xs text-gray-500 space-x-4 mb-2">
                <div className="flex items-center gap-1">
                  <CalendarDays size={14} />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} />
                  <span>By {blog.author}</span>
                </div>
              </div>
              <h4 className="font-semibold text-slate-800 text-md mb-2">
                {blog.title}
              </h4>
              <a
                href="#"
                className="text-sm text-cyan-800 font-medium hover:underline flex items-center gap-1"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
