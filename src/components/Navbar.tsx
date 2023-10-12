import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='background-light900_dark200 fixed z-50 flex w-full items-center justify-between gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12'>
      <Link href='/' className='flex items-center gap-1'>
        <Image
          src='/assets/images/site-logo.svg'
          width={23}
          height={23}
          alt='DevForun'
        />
        <p className='h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden'>
          Dev <span className='text-primary-500'>Forum</span>
        </p>
      </Link>
      {/* GLobalSearch */}
      <SignedIn>
        Theme
        <UserButton
          afterSignOutUrl='/'
          appearance={{
            elements: {
              avatarBox: 'h-10 w-10',
              variables: {
                colorPrimary: '#ff7000',
              },
            },
          }}
        />
      </SignedIn>
    </nav>
  );
}
