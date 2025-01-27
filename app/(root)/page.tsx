"use client";
import AddHabitDialog from "@/components/add-habit-dialog";
import HabitCard from "@/components/habit-card";
import { useHabitsContext } from "@/components/habits-provider";

export default function Home() {
  const { habits } = useHabitsContext();

  return (
    <main className="w-11/12 mx-auto min-h-[calc(100svh-4rem)] py-6 grid">
      <AddHabitDialog />
      {!!habits.length && (
        <div className="mb-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {habits.map((habit, i) => (
            <HabitCard key={i} habit={habit} />
          ))}
        </div>
      )}
    </main>
  );
}
