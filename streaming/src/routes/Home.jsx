import React from "react";
import Header from "../components/Header";
import SectionHeader from "../components/SectionHeader";
import SectionItems from "../components/SectionItems";
import SectionMusic from "../components/SectionMusic";
import Footer from "../layout/Footer";
import Hero from "../layout/Hero";
import Navbar from "../layout/Navbar";
import SecondHero from "../layout/SecondHero";
import SlideHeader from "../layout/SlideHeader";
import SlidePlaylist from "../layout/SlidePlaylist";
import ThirdHero from "../layout/ThirdHero";

export default function Home() {
  return (
    <div className="bg-black m-0 p-0 h-[100vh] w-full ">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-black">
        <Hero />
        <Header />
        <SecondHero />
        <SlideHeader />
        <SectionHeader />
        <SectionItems />
        <ThirdHero />
        <SlidePlaylist />
        <SectionMusic />
        <Footer />
      </div>
    </div>
  );
}
