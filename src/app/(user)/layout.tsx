import DashboardSidebar from "./(components)/DashboardSidebar";
import "../globals.css";
import DashboardTopbar from "./(components)/DashboardTopbar";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body>
				<div className="flex h-screen">
					<DashboardSidebar />
					<div className="flex-1 flex flex-col space-y-2">
						<DashboardTopbar />
						<div className="flex-1 flex flex-col overflow-hidden overflow-y-auto p-5">
							{children}
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
