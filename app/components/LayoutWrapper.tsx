'use client';

import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const noLayoutRoutes = ['/signin', '/signup', '/book-dashboard'];
  const hiddenLayoutRouts = noLayoutRoutes.some(route =>
    pathname.startsWith(route)
  );

  return (
    <>
      {!hiddenLayoutRouts && <Header />}
      {children}
      {!hiddenLayoutRouts && <Footer />}
    </>
  );
};

export default LayoutWrapper;
