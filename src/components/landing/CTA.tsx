import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";

const CTA = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-warm p-10 md:p-16 lg:p-20 text-center shadow-warm">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-foreground/10 blur-3xl" aria-hidden />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary-foreground/10 blur-3xl" aria-hidden />

          <div className="relative max-w-2xl mx-auto text-primary-foreground">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Pronto para presentear de um jeito{" "}
              <span className="italic">único</span>?
            </h2>
            <p className="mt-5 text-lg md:text-xl opacity-90">
              Fale com a gente agora pelo WhatsApp e receba um atendimento
              personalizado em minutos.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="xl" variant="soft" className="bg-background text-foreground">
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20encomendar%20uma%20caneca%20personalizada."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </a>
              </Button>
              <Button asChild size="xl" variant="soft" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10">
                <a
                  href="https://instagram.com/imprimindoideias"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                  @imprimindoideias
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
