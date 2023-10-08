import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className='flex h-screen w-screen items-center justify-center'>
      <h1 className='text-2xl'>This is a Next.js project template.</h1>

      <UserButton afterSignOutUrl='/' />
    </main>
  );
}
