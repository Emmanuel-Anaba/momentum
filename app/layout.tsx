import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import HabitProvider from "@/components/habits-provider";

const workSans = localFont({
  src: "./fonts/WorkSans.ttf",
  variable: "--font-work-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Momentum",
  description: "Track your daily habits and build streaks!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        <HabitProvider>{children}</HabitProvider>
        <Toaster />
      </body>
    </html>
  );
}
