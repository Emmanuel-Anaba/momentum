"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays } from "lucide-react";
import { useHabit } from "@/components/habits-provider";

export default function CalendarPreview() {
  const { completedDays } = useHabit();

  const highlighted = (date: Date) => {
    return completedDays
      .map((dateString) => new Date(dateString))
      .some(
        (highlightedDate) =>
          highlightedDate.toDateString() === date.toDateString()
      );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <CalendarDays className="size-6" />
      </DialogTrigger>
      <DialogContent className="w-fit">
        <DialogHeader>
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>
        <Calendar
          className="rounded-md border m-auto"
          modifiers={{ highlighted }}
          modifiersStyles={{
            highlighted: {
              backgroundColor: "hsl(var(--chart-2))",
              color: "hsl(var(--background))",
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
