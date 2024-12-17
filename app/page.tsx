import AboutMe from "@/components/about-me";
import { ContactMe } from "@/components/contact";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutMe />
      <Services />
      <Testimonials />
      <ContactMe />
      <Footer />
    </main>
  );
}
