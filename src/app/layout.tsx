import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or your chosen font
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/sonner"; // Import the Sonner Toaster

// Setup font - Example with Inter
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Ensure matches tailwind.config.ts
});

// --- UPDATE METADATA ---
export const metadata: Metadata = {
  title: "Om Shah - Web Developer Portfolio", // Change to Your Name & Title
  description: "Personal portfolio of Om Shah, showcasing web development projects, skills in React, Next.js, TypeScript, and more.", // Change to your description
  // Optional: Add Open Graph / Twitter card metadata for better sharing
  // openGraph: { ... }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable // Apply font variable
        )}
      >
        {/* Optional: Add ThemeProvider if using next-themes */}
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            {/* Use flex-grow to push footer down */}
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster richColors position="top-right" /> {/* Add Sonner Toaster */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}