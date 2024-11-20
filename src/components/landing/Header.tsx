"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

import { Button } from "@/components/ui/button";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Toggle mobile menu visibility
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="fixed top-0 left-0 w-full bg-gray-800 shadow z-50 text-white">
			<div className="container mx-auto bg-gray-800">
				<div className="px-4 mx-auto sm:px-6 lg:px-8">
					<nav className="relative flex items-center justify-between h-16 lg:h-20">
						{/* Desktop Navigation */}
						<div className="hidden lg:flex lg:items-center lg:space-x-10">
							<Link href="#" className="">
								Features
							</Link>
							<Link href="#" className="">
								Solutions
							</Link>
							<Link href="#" className="">
								Resources
							</Link>
							<Link href="#" className="">
								Pricing
							</Link>
						</div>

						{/* Logo */}
						<div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
							<Link href="/" className="flex">
								<Image
									className="h-8 lg:h-10"
									src={Logo}
									alt="Logo"
									width={150}
									height={100}
								/>
							</Link>
						</div>

						{/* Mobile Menu Toggle */}
						<div className="lg:hidden flex items-center space-x-4">
							<button
								type="button"
								className=" bg-gray-800 rounded-full w-9 h-9 flex items-center justify-center"
								onClick={toggleMobileMenu}
							>
								<svg
									className="w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d={
											isMobileMenuOpen
												? "M6 18L18 6M6 6l12 12"
												: "M4 6h16M4 12h16m-7 6h7"
										}
									/>
								</svg>
							</button>
						</div>

						{/* Desktop Sign-in / Sign-up */}
						<div className="hidden lg:flex lg:items-center lg:space-x-10">
							<Button
								asChild
								variant={"link"}
								className="text-white font-medium text-base"
							>
								<Link href="/auth/signin" className=" ">
									Sign in
								</Link>
							</Button>
							<Button
								asChild
								variant={"link"}
								className="text-white font-medium text-base"
							>
								<Link href="/auth/signup" className=" ">
									Sign up
								</Link>
							</Button>
						</div>
					</nav>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="lg:hidden py-4 bg-gray-800">
					<div className="px-4 mx-auto sm:px-6 lg:px-8">
						<div className="flex flex-col space-y-4">
							<Link href="#" className=" ">
								Features
							</Link>
							<Link href="#" className=" ">
								Solutions
							</Link>
							<Link href="#" className=" ">
								Resources
							</Link>
							<Link href="#" className=" ">
								Pricing
							</Link>
							<hr className="border-gray-200" />
							<Link href="/auth/signup" className=" ">
								Sign up
							</Link>
							<Link href="/auth/signin" className=" ">
								Sign in
							</Link>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
