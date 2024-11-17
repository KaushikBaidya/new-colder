"use client";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/assets/icon.svg";

const Footer: React.FC = () => {
	return (
		<footer className="px-4 py-8 bg-gray-800 text-white">
			<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
				<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
					<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full">
						<Image
							className="h-8 lg:h-10"
							src={Icon}
							alt="Logo"
							width={150}
							height={100}
						/>
					</div>
					<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
						<li>
							<Link href="/terms">
								<p className="hover:text-violet-600">Terms of Use</p>
							</Link>
						</li>
						<li>
							<Link href="/privacy">
								<p className="hover:text-violet-600">Privacy</p>
							</Link>
						</li>
					</ul>
				</div>
				<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
					<li>
						<Link href="https://www.instagram.com" target="_blank">
							<p className="hover:text-violet-600" rel="noopener noreferrer">
								Instagram
							</p>
						</Link>
					</li>
					<li>
						<Link href="https://www.facebook.com" target="_blank">
							<p className="hover:text-violet-600" rel="noopener noreferrer">
								Facebook
							</p>
						</Link>
					</li>
					<li>
						<Link href="https://www.twitter.com" target="_blank">
							<p className="hover:text-violet-600" rel="noopener noreferrer">
								Twitter
							</p>
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
