"use client";

const HeroSection: React.FC = () => {
	return (
		<section className="text-gray-800">
			<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
				<h1 className="text-4xl font-bold leading-none sm:text-5xl">
					Stay Organized, <span className="text-violet-600">Achieve More</span>
				</h1>
				<p className="px-8 mt-8 mb-12 text-lg">
					Streamline your tasks, prioritize what matters, and take control of
					your productivity with ease.
				</p>
				<div className="flex flex-wrap justify-center">
					<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 text-gray-50">
						Get Started for Free
					</button>
					<button className="px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300">
						Explore Features
					</button>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
