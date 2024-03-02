import { Card } from '@/components/Card';
import { Cards } from '@/sections/Cards';
import Image from 'next/image';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="my-48 mx-auto px-8 sm:max-md:px-16 md:max-lg:px-40 lg:px-[500px]">
      <Cards />
    </main>
  );
}
