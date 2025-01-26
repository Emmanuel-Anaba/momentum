"use client";
import { toggleHabit } from "@/actions";
import { Checkbox } from "@/components/ui/checkbox";
import { useHabit, useHabitsContext } from "@/components/habits-provider";
import { Habit } from "@/types";

export function HabitToggle() {
  const { setHabits } = useHabitsContext();
  const { id, completedDays } = useHabit();
  const today = new Date().toLocaleDateString();
  const completed = completedDays.includes(today);

  return (
    <Checkbox
      checked={completed}
      onCheckedChange={() => {
        const updatedHabits = toggleHabit(id);
        setHabits(updatedHabits);
      }}
      className="size-6 rounded-full"
    />
  );
}
