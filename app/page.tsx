"use client";
import AddHabitDialog from "@/components/add-habit-dialog";
import HabitCard from "@/components/habit-card";
import { useHabitsContext } from "@/components/habits-provider";

export default function Home() {
  const { habits } = useHabitsContext();

  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-3">
      {habits.map((habit, i) => (
        <HabitCard key={i} habit={habit} />
      ))}
      <AddHabitDialog />
    </main>
  );
}
