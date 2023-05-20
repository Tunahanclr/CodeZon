import Hero from "../components/Hero";
import Header from "../components/Header";
import Features from "../components/Features";
import Featuresİnfo from "../components/Featuresİnfo";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Featuresİnfo />
      <About />
        <Footer/>
    </div>
  );
}
