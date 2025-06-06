import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const header = () => {
   return (
      <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
         <nav className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link href="/">
               <Image
                  src="/logo-single-ld.png"
                  width={200}
                  height={60}
                  className="h-10 w-auto object-contain"
                  alt="logo"
               />
            </Link>

            <div className="flex items-center space-x-2">
               <SignedOut>
                  <SignInButton>
                     <Button variant="secondary">Sign In</Button>
                  </SignInButton>
               </SignedOut>

               <SignedIn>
                  <UserButton
                     appearance={{
                        elements: {
                           avatarBox: 'h-10 w-10',
                           userButtonPopoverCard: 'shadow-xl',
                           userPreviewMainIdentifier: 'font-semibold',
                        },
                     }}
                  />
               </SignedIn>
            </div>
         </nav>
      </header>
   );
};

export default header;
