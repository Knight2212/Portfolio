import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/ui/Hero';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/ui/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-dark-primary">
            <Navbar />
            <Hero />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </main>
    );
}
