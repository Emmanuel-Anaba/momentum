import CalendarPreview from "@/components/calendar-preview";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { EllipsisVertical } from "lucide-react";

export default function Home() {
  const {
    currentStreak,
    longestStreak,
    title,
    category,
    createdAt,
    editedAt,
    completedDays,
  } = {
    title: "Get up at 3AM to code",
    category: "work",
    currentStreak: 9,
    longestStreak: 16,
    createdAt: new Date().toLocaleDateString(),
    editedAt: new Date().toLocaleDateString(),
    completedDays: ["2025-1-26", "1/24/2025"],
  };

  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-3">
      <Card className="relative">
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <CalendarPreview days={completedDays} />
          {/* This will toggle completed */}
          <Checkbox className="size-6 rounded-full" />
          {/* Menu for edit and delete */}
          <EllipsisVertical />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="flex items-center gap-1">
            {/* unslugify */}
            {category}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm flex flex-col gap-6">
          <div className="size-fit inline-grid place-items-center gap-1">
            <span className="text-xs underline underline-offset-4">
              Current Streak
            </span>
            <span className="text-2xl font-semibold">{currentStreak}</span>
          </div>
          <div className="size-fit inline-grid place-items-center gap-1">
            <span className="text-xs underline underline-offset-4">
              Longest Streak
            </span>
            <span className="text-2xl font-semibold">{longestStreak}</span>
          </div>
          <div className="text-xs">
            {/* Like this 👇 */}
            {/* Sat, January 25, 2025 at 3:21:56 AM*/}
            <p>Created: {createdAt}</p>
            <p>Last Edited: {editedAt}</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
