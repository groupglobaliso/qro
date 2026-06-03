import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import Certifications from "@/sections/Certifications";
import WhyUs from "@/sections/WhyUs";
import Stats from "@/sections/Stats";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Certifications />
        <WhyUs />
      </main>
    </>
  );
}

