import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo leva para receber meu pedido?",
    a: "A produção leva de 2 a 4 dias úteis. O envio depende da sua região, mas a maioria dos pedidos chega em até 7 dias úteis após a aprovação da arte.",
  },
  {
    q: "Posso enviar minha própria arte ou foto?",
    a: "Claro! Aceitamos fotos, ilustrações, logos e frases. Nossa equipe ajusta tudo e envia uma prévia digital para sua aprovação antes de imprimir.",
  },
  {
    q: "A impressão é durável e pode ir na máquina de lavar louça?",
    a: "Sim. Usamos sublimação de alta qualidade, resistente ao uso diário e ao micro-ondas. Recomendamos lavagem manual para preservar por mais tempo.",
  },
  {
    q: "Vocês fazem pedidos em grande quantidade para empresas?",
    a: "Sim! Atendemos brindes corporativos, eventos e lembrancinhas. Entre em contato para um orçamento personalizado com condições especiais.",
  },
  {
    q: "Como faço para encomendar?",
    a: "É só clicar no botão de WhatsApp e conversar com a gente. Em poucos minutos definimos o produto, a personalização e fechamos seu pedido.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Dúvidas frequentes
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Tudo que você precisa{" "}
            <span className="italic text-gradient-warm">saber</span>.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border/60 rounded-2xl px-6 shadow-soft"
            >
              <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
