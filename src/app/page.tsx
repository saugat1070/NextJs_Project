import { HeroSection } from "@/components/Hero";
import { Feature } from "@/components/feature-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased
    bg-grid-white/[0.02] ">
      <HeroSection/>
      <Feature/>
    </main>
  );
}