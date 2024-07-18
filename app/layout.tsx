import '@/style/css/bootstrap/bootstrap.min.css';
import '@/style/css/hamburgers/hamburgers.css';
import '@/style/css/owlcarousel/owl.carousel.min.css';
import '@/style/css/owlcarousel/owl.theme.default.min.css';

import 'react-alice-carousel/lib/alice-carousel.css';

import '@/style/css/style-2.css';

import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Kabaroto',
    default: 'Kabaroto',
  },
  description: 'The personal project for portfolio website.',
  metadataBase: new URL('https://kabaroto.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
