import React from "react";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeaderHomePage from "@/components/HeaderHomePage";
import HeroSection from "@/components/HeroSection";
import SubHeroSection from "@/components/SubHeroSection";

const Homepage = () => {
    return (
        <section className="dark bg-black min-h-full text-white pb-20">
            <HeaderHomePage />

            <HeroSection />

            <div className="border-b-[1px] border-gray-400 my-[100px]" />

            <SubHeroSection />

            <div className="border-b-[1px] border-gray-400 my-[100px]" />

            <AboutSection />

            <div className="border-b-[1px] border-gray-400 my-[100px]" />

            <Footer />
        </section>
    );
};

export default Homepage;
