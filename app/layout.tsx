import type { Metadata } from "next";
import localFont from "next/font/local";
import { LayoutProps } from "@/types";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const workSans = localFont({
  src: "./fonts/WorkSans.ttf",
  variable: "--font-work-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Momentum",
  description: "Track your daily habits and build streaks!",
};

export default function AppLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${workSans.variable} antialiased grid min-h-svh`}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
