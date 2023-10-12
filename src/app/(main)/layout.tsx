import LeftSidebar from '@/components/LeftSidebar';
import Navbar from '@/components/Navbar';
import RightSidebar from '@/components/RightSidebar';
import { type ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className='background-light850_dark100 relative'>
      <Navbar />
      <div className='flex'>
        <LeftSidebar />
        <section className='flex min-h-screen flex-1 flex-col px-1 pt-36 max-md:pb-14 sm:px-14'>
          <div className='mx-auto w-full max-w-5xl'>{children}</div>
        </section>
        <RightSidebar />
      </div>
    </main>
  );
}
