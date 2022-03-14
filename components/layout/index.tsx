import type { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
