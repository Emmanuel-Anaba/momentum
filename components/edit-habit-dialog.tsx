"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import HabitForm from "@/components/habit-form";
import { useHabit } from "@/components/habits-provider";
import { useState } from "react";

export default function EditHabitDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const { title, category } = useHabit();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="dropdown-menu-item">
          <Edit />
          Edit
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Habit</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <HabitForm
          isEdit
          initialValues={{ title, category }}
          closeDialog={() => setIsOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
