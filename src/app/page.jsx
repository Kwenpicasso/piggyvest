
import SavingCard from "./components/SavingCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SecuritySection from "./components/SecuritySection";
import DiverseSection from "./components/DiverseSection";
import YoutubeSection from "./components/YoutubeSection";
import TestimonialSection from "./components/TestimonialSection";


export default function Home() {
  return (
    <main className="">
       <Navbar/>
     {/* hero section */}
     <HeroSection/>
      {/* security section */}
      <SecuritySection/>
      {/* savingcard section */}
      <SavingCard/>
      {/* diverse section */}
      <DiverseSection/>
      {/* youtube section */}
      <YoutubeSection/>
    {/* testimonial section */}
      <TestimonialSection/>
      {/* footer */}
      <Footer/>
    </main>
  )
}7