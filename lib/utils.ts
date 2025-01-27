import { clsx, type ClassValue } from "clsx";
import { differenceInCalendarDays } from "date-fns";
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
  return new Date(date).toLocaleDateString("en-US", {
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

export function calculateStreaks(dates: string[]): {
  currentStreak: number;
  longestStreak: number;
} {
  if (!dates || dates.length === 0) {
    return { currentStreak: 0, longestStreak: 0 };
  }

  const today = new Date();

  const sortedDates = dates
    .map((isoString) => new Date(isoString))
    .sort((a, b) => a.getTime() - b.getTime());

  let longestStreak = 0;
  let currentStreak = 0;
  let streak = 0;

  let lastDate: Date | null = null;

  for (const date of sortedDates) {
    if (lastDate && differenceInCalendarDays(date, lastDate) === 1) {
      streak += 1;
    } else {
      longestStreak = Math.max(longestStreak, streak);
      streak = 1;
    }

    lastDate = date;
  }

  longestStreak = Math.max(longestStreak, streak);

  const mostRecentDate = sortedDates[sortedDates.length - 1];
  if (differenceInCalendarDays(today, mostRecentDate) === 0) {
    currentStreak = streak;
  } else if (differenceInCalendarDays(today, mostRecentDate) === 1) {
    currentStreak = streak;
  } else {
    currentStreak = 0;
  }

  return { currentStreak, longestStreak };
}
