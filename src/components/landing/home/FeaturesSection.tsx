"use client";
import React from "react";
import {
	FolderTree,
	Cable,
	ClockAlert,
	BellDot,
	ChartNoAxesCombined,
	Waypoints,
} from "lucide-react";

const FeaturesSection: React.FC = () => {
	return (
		<section className="m-4 md:m-8 text-gray-800 pb-16">
			<div className="container mx-auto p-4 my-6 space-y-2 text-center">
				<h2 className="text-5xl font-bold">
					Empowering Teams to Stay Organized
				</h2>
				<p>
					Discover tools that make managing tasks seamless and efficient for
					every team.
				</p>
			</div>
			<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<div className="flex flex-col items-center p-4">
					<FolderTree size={48} />
					<h3 className="my-3 text-3xl font-semibold">Task Prioritization</h3>
					<div className="space-y-1 leading-tight text-center">
						<p>Sort and rank tasks based on urgency.</p>
						<p>Stay focused on what matters most.</p>
						<p>Track progress effortlessly.</p>
					</div>
				</div>
				<div className="flex flex-col items-center p-4">
					<Cable size={48} />
					<h3 className="my-3 text-3xl font-semibold">Collaboration Tools</h3>
					<div className="space-y-1 leading-tight text-center">
						<p>Share tasks and assign roles.</p>
						<p>Collaborate seamlessly across teams.</p>
						<p>Boost team productivity.</p>
					</div>
				</div>
				<div className="flex flex-col items-center p-4">
					<ClockAlert size={48} />
					<h3 className="my-3 text-3xl font-semibold">Time Management</h3>
					<div className="space-y-1 leading-tight text-center">
						<p>Organize schedules efficiently.</p>
						<p>Meet deadlines with ease.</p>
						<p>Improve time utilization.</p>
					</div>
				</div>
				<div className="flex flex-col items-center p-4">
					<BellDot size={48} />
					<h3 className="my-3 text-3xl font-semibold">Automated Reminders</h3>
					<div className="space-y-1 leading-tight text-center">
						<p>Never miss a task or deadline.</p>
						<p>Receive timely alerts and updates.</p>
						<p>Stay ahead of your work.</p>
					</div>
				</div>
				<div className="flex flex-col items-center p-4">
					<ChartNoAxesCombined size={48} />

					<h3 className="my-3 text-3xl font-semibold">Analytics & Insights</h3>
					<div className="space-y-1 leading-tight text-center">
						<p>Track your team's performance.</p>
						<p>Identify bottlenecks easily.</p>
						<p>Make informed decisions.</p>
					</div>
				</div>
				<div className="flex flex-col items-center p-4">
					<Waypoints size={48} />
					<h3 className="my-3 text-3xl font-semibold">Custom Workflows</h3>
					<div className="space-y-1 leading-tight text-center">
						<p>Adapt tools to your team's needs.</p>
						<p>Create unique workflows easily.</p>
						<p>Boost team flexibility.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
