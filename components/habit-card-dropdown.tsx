import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import DeleteHabitDialog from "@/components/delete-habit-dialog";
import EditHabitDialog from "@/components/edit-habit-dialog";

export default function HabitCardDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <EditHabitDialog />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <DeleteHabitDialog />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
