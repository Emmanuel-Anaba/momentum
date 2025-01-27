"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import HabitForm from "@/components/habit-form";
import { useState } from "react";
import { useHabitsContext } from "@/components/habits-provider";

export default function AddHabitDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const { habits } = useHabitsContext();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {!habits.length && (
        <DialogTrigger asChild>
          <div className="m-auto grid place-items-center border border-dashed rounded-lg p-4 cursor-pointer">
            <Plus className="size-6" />
            <p>Add a Habit</p>
          </div>
        </DialogTrigger>
      )}
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-4 right-4 rounded-full size-10 z-30">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Habit</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <HabitForm closeDialog={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
