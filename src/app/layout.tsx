import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<div className="main">{children}</div>
			</body>
		</html>
	);
}
