import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/Shared";
import { Header } from "@/components/Shared";
import { BaseContainer } from "@/components/Base";
import { AppWrapper } from "@/context";
import { CartPopUp } from "@/components/CartPopUp/CartPopUp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products | Chilli Labs",
	description: "Test task of Roman Smolin for Chilli Labs",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<AppWrapper>
				<body className={inter.className + ' flex flex-col h-screen'}>
					<Header />
					<main className='w-full flex-1'>
						<BaseContainer>
							{children}
						</BaseContainer>
					</main>
					<Footer />
					<CartPopUp />
				</body>
			</AppWrapper>
		</html>
	);
}

