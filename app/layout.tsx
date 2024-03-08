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
        className={`${lato.className} no-scrollbar bg-stone-900 text-white relative max-h-screen-sm flex ml-auto h-screen md:grid md:grid-cols-main-layout `}
      >
        <MenuUl classes="absolute text-stone-900 z-50 w-full md:bg-water gap-4 bottom-4 md:rounded-none md:static">
          <li className="md:mx-auto md:w-full md:max-w-64 bg-stone-100 rounded-lg p-4 shadow-sm">
            <RegionMenu path={path} />
          </li>
          <li className="md:mx-auto md:w-full md:max-w-64 bg-stone-100 rounded-lg p-4 shadow-sm">
            <FilterMenu />
          </li>
        </MenuUl>
        <Suspense>{children}</Suspense>
        {process.env.NEXT_PUBLIC_DEV_MODE === 'TRUE' ? (
          <div className=" z-[999] absolute w-full flex justify-center overflow-visible top-4 left-0">
            <span className="p-2 text-stone-900 mx-auto bg-white rounded-xl shadow-md">
              Dev: 0.6.2
            </span>
          </div>
        ) : (
          <></>
        )}
      </body>
    </html>
  );
}
