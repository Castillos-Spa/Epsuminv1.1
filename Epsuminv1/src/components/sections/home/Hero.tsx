// components/Hero/Hero.tsx
import { getHero1 } from "@/lib/get-hero1";
import HeroClient from "./HeroClient";

export default async function Hero() {
  const slides = await getHero1();

  if (!slides || slides.length === 0) {
    return <div>No hay datos del hero</div>;
  }

  return <HeroClient slides={slides} />;
}