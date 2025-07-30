import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const version = "2.6";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
