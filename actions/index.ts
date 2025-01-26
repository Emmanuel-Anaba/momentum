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
