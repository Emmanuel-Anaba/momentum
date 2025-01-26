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

// This will need the id and title of the habit to be deleted
export default function DeleteHabitDialog() {
  return (
    <Dialog>
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
          <Button>Delete</Button>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
