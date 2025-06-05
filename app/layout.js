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
         <body className={`${inter.className}`}>
            {/* header */}
            <main className="min-h-screen">{children}</main>
            {/* footer */}
            <footer>
               <div className="container mx-auto px-4 py-8">
                  <p>footer</p>
               </div>
            </footer>
         </body>
      </html>
   );
}
