import { clsx, type ClassValue } from "clsx";
import {
  Heart,
  BookOpen,
  Briefcase,
  Utensils,
  Moon,
  Users,
  Palette,
  Star,
  Church,
} from "lucide-react";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string) {
  return text.toLowerCase().replaceAll(" ", "-");
}

export function unslugify(slug: string) {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/^\w|\s\w/g, (char) => char.toUpperCase());
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
}

export function getIconForCategory(category: string) {
  switch (slugify(category)) {
    case "health":
    case "fitness":
      return Heart;
    case "study":
      return BookOpen;
    case "work":
    case "productivity":
      return Briefcase;
    case "nutrition":
      return Utensils;
    case "sleep":
      return Moon;
    case "social":
      return Users;
    case "hobby":
      return Palette;
    case "spirituality":
      return Church;
    default:
      return Star;
  }
}
