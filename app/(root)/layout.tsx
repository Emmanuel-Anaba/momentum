import { HabitsProvider } from "@/components/habits-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Toaster } from "@/components/ui/toaster";
import { LayoutProps } from "@/types";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <header className="h-16 sticky top-0 bg-background border-b grid z-50">
        <div className="w-11/12 mx-auto flex items-center justify-between">
          <h1 className="text-xl font-semibold">My Habits</h1>
          <ThemeToggle />
        </div>
      </header>
      <HabitsProvider>{children}</HabitsProvider>
      <Toaster />;
    </>
  );
}
