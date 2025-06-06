import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
   return (
      <div className="bg-background">
         <section className="relative overflow-hidden py-32">
            <div className="container mx-auto px-4">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Sinistra */}
                  <div className="space-y-8">
                     <Badge
                        variant="outline"
                        className="bg-emerald-900/30 border-emerald-700/30 text-emerald-400 text-sm font-medium"
                     >
                        Versione Beta
                     </Badge>
                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                        Lumevex
                        <br />
                        <span className="gradient-title">LD Multimedia</span>
                     </h1>
                     <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                        Il tuo spazio digitale per prenotazioni multimediali. Centralizza servizi, orari e disponibilità
                        in un click.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700">
                           <Link href={'/onboarding'}>
                              Scopri di più <ArrowRight className="ml-2 h-4 w-4" />
                           </Link>
                        </Button>
                        <Button
                           asChild
                           size="lg"
                           variant="outline"
                           className="border-emerald-700/300 hover:bg-muted/80"
                        >
                           <Link href={'/doctors'}>
                              doctors <ArrowRight className="ml-2 h-4 w-4" />
                           </Link>
                        </Button>
                     </div>
                  </div>
                  {/* Destra */}
                  <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
                     <Image
                        src="/hero.png"
                        alt="prenotation illustration"
                        fill
                        priority
                        className="object-cover md:pt-14 rounded-xl"
                     />
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
