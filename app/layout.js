import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
   title: 'Lumevex',
   description:
      'Prenota visite mediche online in modo semplice e veloce. Appuntamenti con specialisti a portata di clic.',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${inter.className}`}>{children}</body>
      </html>
   );
}
