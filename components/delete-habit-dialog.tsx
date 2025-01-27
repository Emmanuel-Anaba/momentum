"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteHabit } from "@/actions";
import { useHabit, useHabitsContext } from "./habits-provider";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function DeleteHabitDialog() {
  const { id, title } = useHabit();
  const { setHabits } = useHabitsContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="dropdown-menu-item">
          <Trash2 />
          Delete
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete &apos;Habit Title&apos;</DialogTitle>
          <DialogDescription>
            This will permanently delete this habit.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={() => {
              const updatedHabits = deleteHabit(id);
              setHabits(updatedHabits);
              setIsOpen(!isOpen);
              toast({
                title: `Deleted Habit: '${title}'`,
              });
            }}>
            Delete
          </Button>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
