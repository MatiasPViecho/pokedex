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
      <body className={`${lato.className} bg-stone-900 text-white relative`}>
        {children}
        {process.env.NEXT_PUBLIC_DEV_MODE === 'TRUE' ? (
          <span className="p-2 z-50 text-white bg-stone-600 rounded-xl absolute -bottom-16 left-1/3 mx-auto">
            v: 0.3.2 - in development
          </span>
        ) : (
          <></>
        )}
      </body>
    </html>
  );
}
