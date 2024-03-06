import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';

const lato = Lato({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'By MViecho',
  icons: {
    icon: '/public/pokeball.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/pokeball.svg"
        sizes="any"
      ></link>
      <body
        className={`${lato.className} no-scrollbar bg-stone-900 text-white relative max-h-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-screen`}
      >
        {children}
        {process.env.NEXT_PUBLIC_DEV_MODE === 'TRUE' ? (
          <div className=" z-[999] absolute w-full flex justify-center overflow-visible top-4 left-0">
            <span className="p-2 text-stone-900 mx-auto bg-white rounded-xl shadow-md">
              v: 0.3.3 - in development
            </span>
          </div>
        ) : (
          <></>
        )}
      </body>
    </html>
  );
}
