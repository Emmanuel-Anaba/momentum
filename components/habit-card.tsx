import CalendarPreview from "@/components/calendar-preview";
import HabitCardDropdown from "@/components/habit-card-dropdown";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { formatDate, unslugify } from "@/lib/utils";
import { Habit } from "@/types";
import { HabitProvider } from "@/components/habits-provider";
import { HabitToggle } from "@/components/habit-toggle";

export default function HabitCard({ habit }: { habit: Habit }) {
  const { currentStreak, longestStreak, title, category, createdAt, editedAt } =
    habit;
  
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
    <HabitProvider habit={habit}>
      <Card className="relative">
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <CalendarPreview />
          <HabitToggle/>
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
    </HabitProvider>
  );
}
