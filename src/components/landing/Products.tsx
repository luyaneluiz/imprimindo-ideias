import productMug from "@/assets/Product-mug.jpeg";
import productCup from "@/assets/Product-cup.jpeg"
import productSqueeze from "@/assets/Product-squeeze.jpeg";
import productMimo from "@/assets/Product-mimo.jpeg";
import productBuque from "@/assets/Product-buque.jpeg";
import productCesta from "@/assets/Product-cesta.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Gift } from "lucide-react";

const products = [
  {
    title: "Caneca personalizada",
    desc: "Sua arte, foto ou frase favorita estampada em cerâmica de alta qualidade.",
    image: productMug,
  },
  {
    title: "Xícara especial",
    desc: "Xícara com design exclusivo, perfeita para sua manhã.",
    image: productCup,
  },
  {
    title: "Squeeze de alumínio",
    desc: "Garrafa leve e resistente para acompanhar você todos os dias.",
    image: productSqueeze,
  },
  {
    title: "Caneca mimo",
    desc: "Caneca recheada de chocolates e amor — pronta para presentear.",
    image: productMimo,
  },
  {
    title: "Caneca buquê",
    desc: "Flores delicadas em uma caneca personalizada. Romântico e único.",
    image: productBuque,
  },
  {
    title: "Cesta com caneca",
    desc: "Kit presente completo: caneca, doces e itens gourmet selecionados.",
    image: productCesta,
  },
];

const Products = () => {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className=" mb-12 md:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Nosso catálogo
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Presentes que falam{" "}
            <span className="italic text-gradient-warm">por você</span>.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cada item é produzido sob demanda, com acabamento impecável e a sua
            personalização exclusiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {products.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-300 shrink-0" />
                </div>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="hero" size="lg">
            <a href="#contato">
              <Gift className="w-5 h-5 mr-1" />
              Quero personalizar o meu!
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
