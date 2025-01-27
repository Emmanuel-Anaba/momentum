"use client";
import { getHabits, saveHabits } from "@/actions";
import { Habit, LayoutProps } from "@/types";
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Loader2 } from "lucide-react";

const HabitsContext = createContext<{
  habits: Habit[];
  setHabits: Dispatch<SetStateAction<Habit[] | null>>;
}>({
  habits: [],
  setHabits: () => {},
});

const HabitContext = createContext<Habit>({
  id: "",
  title: "",
  category: "",
  createdAt: new Date(),
  editedAt: new Date(),
  currentStreak: 0,
  longestStreak: 0,
  completedDays: [],
});

export function HabitsProvider({ children }: LayoutProps) {
  const [habits, setHabits] = useState<Habit[] | null>(null);

  useEffect(() => setHabits(getHabits()), []);

  useEffect(() => saveHabits(habits!), [habits]);

  if (!habits)
    return (
      <div className="m-auto">
        <Loader2 className="animate-spin size-16" />
      </div>
    );

  return (
    <HabitsContext.Provider
      value={{
        habits,
        setHabits,
      }}>
      {children}
    </HabitsContext.Provider>
  );
}

export function HabitProvider({
  children,
  habit,
}: LayoutProps & { habit: Habit }) {
  return (
    <HabitContext.Provider value={habit}>{children}</HabitContext.Provider>
  );
}

export const useHabitsContext = () => useContext(HabitsContext);

export const useHabit = () => useContext(HabitContext);
