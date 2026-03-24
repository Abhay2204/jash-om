import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import About from '@/components/About';
import Philosophy from '@/components/Philosophy';
import Services from '@/components/Services';
import Founder from '@/components/Founder';
import WhyChooseUs from '@/components/WhyChooseUs';
import Feedback from '@/components/Feedback';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Philosophy />
      <Services />
      <WhyChooseUs />
      <Founder />
      <Feedback />
      <Contact />
      <Footer />
    </main>
  );
}
