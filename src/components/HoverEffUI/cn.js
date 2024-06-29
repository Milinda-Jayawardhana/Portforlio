import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// `cn` function combines class names and merges Tailwind utility classes
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
