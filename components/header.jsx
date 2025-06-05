import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const header = () => {
   return (
      <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
         <nav className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link href="/">
               <Image src="/logo-single.png" width={200} height={60} className="h-10 w-auto object-contain" />
            </Link>
         </nav>
      </header>
   );
};

export default header;
