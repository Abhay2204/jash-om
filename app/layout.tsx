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
  title: 'Jash Om Standard Services & Training | Expert Food Safety & Compliance Consulting',
  description: 'Premium food safety and compliance consultancy led by Ex-Nestlé Quality Head. Specializing in ISO 22000, FSSC 22000, HACCP audit readiness and expert compliance training in West Bengal, India.',
  keywords: [
    'Food Safety Consulting', 
    'ISO 22000 Preparation', 
    'FSSC 22000 Compliance', 
    'HACCP Gap Analysis', 
    'Audit Readiness Services', 
    'Jash Om Standard Services', 
    'Food Safety Training India', 
    'Quality Systems Management'
  ],
  icons: {
    icon: '/image/logo square.png',
    apple: '/image/logo square.png',
  },
  openGraph: {
    title: 'Jash Om Standard Services & Training',
    description: 'Independent Food Safety & Compliance Experts ensuring total regulatory excellence.',
    url: 'https://jash-om.vercel.app', // Using Vercel URL as a likely default if unknown
    siteName: 'Jash Om',
    images: [
      {
        url: '/image/logo.png',
        width: 1200,
        height: 630,
        alt: 'Jash Om Standard Services'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jash Om Standard Services & Training',
    description: 'Premium food safety and audit readiness consulting.',
    images: ['/image/logo.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased text-[#1A1A1A] bg-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
