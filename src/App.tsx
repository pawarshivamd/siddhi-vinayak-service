import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { TrustSignals } from "./components/sections/TrustSignals";
import { Services } from "./components/sections/Services";
import { Process } from "./components/sections/Process";
import { Sales } from "./components/sections/Sales";
import { Packages } from "./components/sections/Packages";
import { PostService } from "./components/sections/PostService";
import { FAQ } from "./components/sections/FAQ";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustSignals />
        <Services />
        <Process />
        <Sales />
        <Packages />
        <PostService />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
