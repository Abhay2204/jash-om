import type {Metadata} from 'next';
import { Inter, DM_Serif_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Jash Om Standard Services & Training',
  description: 'Premium food safety and compliance consultancy led by industry experts.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased text-[#1A1A1A] bg-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
