"use client";

import FeaturesSection from "@/components/landing/home/FeaturesSection";
import HeroSection from "@/components/landing/home/HeroSection";

export default function Home() {
	return (
		<div className="max-w-screen-xl mx-auto pt-28">
			<HeroSection />
			<FeaturesSection />
		</div>
	);
}
