"use client";
import { getHabits, saveHabits } from "@/actions";
import { Habit } from "@/types";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Loader2 } from "lucide-react";

const HabitContext = createContext<{
  habits: Habit[];
  setHabits: Dispatch<SetStateAction<Habit[] | null>>;
}>({
  habits: [],
  setHabits: () => {},
});

export default function HabitProvider({ children }: { children: ReactNode }) {
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
    <HabitContext.Provider
      value={{
        habits,
        setHabits,
      }}>
      {children}
    </HabitContext.Provider>
  );
}

export const useHabitContext = () => useContext(HabitContext);
