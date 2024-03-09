'use client';
import { Lato } from 'next/font/google';
import './globals.css';
import { RegionMenu } from '@/components/RegionMenu';
import { FilterMenu } from '@/components/FilterMenu';
import { MenuUl } from '@/components/Menu';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
const lato = Lato({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  return (
    <html lang="en">
      <link
        rel="icon"
        href="/pokeball.svg"
        sizes="any"
      ></link>
      <body
        className={`${lato.className} no-scrollbar bg-stone-900 text-white relative max-h-screen-sm flex ml-auto h-screen`}
      >
        <div className="absolute flex flex-col px-2 md:justify-center py-2 text-stone-900 z-50 w-full md:bg-white/30 md:backdrop-blur-sm md:backdrop-brightness-75 md:shadow-sm gap-4 bottom-4 md:rounded-none md:top-0 md:h-full md:left-0 md:w-[20%]">
          <div className="md:mx-auto md:w-full md:max-w-64 bg-stone-100  rounded-lg p-4 shadow-sm">
            <RegionMenu path={path} />
          </div>
          <div className="md:mx-auto md:w-full md:max-w-64 bg-stone-100 rounded-lg p-4 shadow-sm">
            <FilterMenu />
          </div>
        </div>
        <Suspense>{children}</Suspense>
        {process.env.NEXT_PUBLIC_DEV_MODE === 'TRUE' ? (
          <div className=" z-[999] absolute w-full flex justify-center overflow-visible top-4 left-0">
            <span className="p-2 text-stone-900 mx-auto bg-white rounded-xl shadow-md">
              Dev: 1.0.2
            </span>
          </div>
        ) : (
          <></>
        )}
      </body>
    </html>
  );
}
