import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "MAP Studios - Graphic & Web Designer",
    description: "Portfolio of MAP Studios - Professional Graphic and Web Designer with 3+ years of experience",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
