import { getIconForCategory } from "@/lib/utils";

export const categories = [
  "Health",
  "Fitness",
  "Study",
  "Work",
  "Productivity",
  "Nutrition",
  "Sleep",
  "Social",
  "Hobby",
  "Spirituality",
];

export const categoriesWithIcon = categories.map((item) => ({
  item,
  Icon: getIconForCategory(item),
}));
