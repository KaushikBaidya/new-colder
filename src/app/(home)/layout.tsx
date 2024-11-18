import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const monaSans = localFont({
	src: "../fonts/MonaSans-Regular.ttf",
	variable: "--font-monaSans-sans",
	weight: "200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
	title: "TaskJar",
	description: "Manage all your tasks in one place",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${monaSans.variable} antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
