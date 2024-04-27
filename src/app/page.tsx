import FeaturedCourses from "@/components/FeaturedCourses";
import MusicSchoolTestimonials from "@/components/TestimonialCards"
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
import Upcomingwebnir from "@/components/Upcomingwebnir";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased
    bg-grid-white/[0.02]">

      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <Upcomingwebnir/>
      
    </main>
  );
}
