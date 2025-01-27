export interface Habit {
  id: string;
  title: string;
  category: string;
  createdAt: Date;
  editedAt: Date;
  currentStreak: number;
  longestStreak: number;
  completedDays: string[];
}

export interface LayoutProps {
  children: React.ReactNode;
}
