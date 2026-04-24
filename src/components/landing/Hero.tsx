import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, PackageCheck } from "lucide-react";
import heroMug from "@/assets/Hero-mug.jpeg";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      {/* decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-accent/30 blur-3xl" aria-hidden />

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-24 lg:py-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/80 border border-border/60 text-xs font-medium text-muted-foreground backdrop-blur">
            <Heart className="w-3.5 h-3.5 text-primary" />
            Feito à mão, com carinho!
          </span>

          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
            Transformando{" "}
            <span className="text-gradient-warm italic">ideias</span> em
            presentes únicos.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Canecas, xícaras e squeezes personalizados com amor em cada detalhe. Perfeitos para surpreender, presentear e eternizar momentos.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#contato">
                Pedir minha caneca <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="soft" size="xl">
              <a href="#produtos">Ver produtos</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square max-w-lg mx-auto animate-float">
            <div className="absolute inset-0 bg-gradient-warm rounded-[3rem] rotate-6 opacity-30 blur-2xl" />
            <img
              src={heroMug}
              alt="Caneca personalizada Imprimindo Ideias com café quente"
              width={1024}
              height={1024}
              className="relative w-full h-full object-cover rounded-[3rem] shadow-warm"
            />
          </div>
          {/* floating tag */}
          <div className="absolute -bottom-5 right-4 md:-right-6 bg-card rounded-2xl shadow-soft p-4 flex items-center gap-3 border border-border/60">
            <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center">
              <PackageCheck className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Entrega rápida</p>
              <p className="text-sm font-semibold">Em até 5 dias úteis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
