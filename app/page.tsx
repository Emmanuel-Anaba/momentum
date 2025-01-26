import AddHabitDialog from "@/components/add-habit-dialog";
import CalendarPreview from "@/components/calendar-preview";
import HabitCardDropdown from "@/components/habit-card-dropdown";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { formatDate, unslugify } from "@/lib/utils";


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
    createdAt: new Date(),
    editedAt: new Date(),
    completedDays: ["2025-1-26", "1/24/2025"],
  };

  const streakUI = (streak_name: string, value: number) => {
    return (
      <div className="size-fit inline-grid place-items-center gap-1">
        <span className="text-xs underline underline-offset-4">
          {streak_name}
        </span>
        <span className="text-2xl font-semibold">{value}</span>
      </div>
    );
  };

  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-3">
      <Card className="relative">
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <CalendarPreview days={completedDays} />
          {/* This will toggle completed */}
          <Checkbox className="size-6 rounded-full" />
          <HabitCardDropdown />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="flex items-center gap-1">
            {unslugify(category)}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm flex flex-col gap-6">
          {streakUI("Current Streak", currentStreak)}
          {streakUI("Longest Streak", longestStreak)}
          <div className="text-xs">
            <p>Created: {formatDate(createdAt)}</p>
            <p>Last Edited: {formatDate(editedAt)}</p>
          </div>
        </CardContent>
      </Card>
      <AddHabitDialog />
    </main>
  );
}
