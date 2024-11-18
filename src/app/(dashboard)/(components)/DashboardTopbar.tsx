"use client";
import Link from "next/link";
import React from "react";

const DashboardTopbar = () => {
	return (
		<div className="w-full h-16 bg-gray-50 border-b border-2 border-gray-200 flex items-center justify-between">
			<p>Dashboard Topbar</p>
			<div>
				<Link href="/" className=" ">
					home
				</Link>
			</div>
		</div>
	);
};

export default DashboardTopbar;
