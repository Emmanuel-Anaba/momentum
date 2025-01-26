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

export default function CalendarPreview({ days }: { days: string[] }) {
  const highlighted = (date: Date) => {
    return days
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
