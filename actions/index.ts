"use client";
import { Habit } from "@/types";

const STORAGE_KEY = "daily_habits";

export function getHabits() {
  if (typeof window !== "undefined")
    return (JSON.parse(localStorage.getItem(STORAGE_KEY)!) || []) as Habit[];
  return [];
}

export function saveHabits(updatedHabits: Habit[]) {
  if (typeof window !== "undefined")
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHabits));
}

export function deleteHabit(id: string) {
  const updatedHabits = getHabits().filter((habit) => habit.id !== id);
  return updatedHabits;
}

export function editHabit(id: string, title: string, category: string) {
  const updatedHabits = getHabits().map((habit) =>
    habit.id === id
      ? { ...habit, title, category, editedAt: new Date() }
      : habit
  );
  return updatedHabits;
}

export function addHabit(title: string, category: string) {
  const newHabit: Habit = {
    id: crypto.randomUUID(),
    title,
    category,
    createdAt: new Date(),
    currentStreak: 0,
    longestStreak: 0,
    editedAt: new Date(),
    completedDays: [],
  };
  const updatedHabits: Habit[] = [...getHabits(), newHabit];
  return updatedHabits;
}
