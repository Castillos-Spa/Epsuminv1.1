// components/Hero/Hero.tsx
import { getHero } from "@/lib/get-hero";
import HeroClient from "./HeroClient";

export default async function Hero() {
  const slides = await getHero();

  if (!slides || slides.length === 0) {
    return <div>No hay datos del hero</div>;
  }

  return <HeroClient slides={slides} />;
}