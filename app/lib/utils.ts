import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ( string | undefined | false | null)[]) {
  return twMerge(clsx(inputs));
}
export function formatSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const size = bytes / Math.pow(k, i);
  return `${size.toFixed(1)} ${sizes[i]}`;
}

export const generateUUID = () => crypto.randomUUID();
