import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";

// This will need the id, title and category of the habit to be deleted
export default function EditHabitDialog() {
  return (
    <Dialog>
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
        {/* A form to edit the habit's title and category */}
      </DialogContent>
    </Dialog>
  );
}
