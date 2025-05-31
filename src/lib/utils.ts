import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Currency formatting utility for Indian Rupees
export function formatCurrency(amount: number): string {
  return `₹${amount.toFixed(2)}`;
}

// Format currency with appropriate sign for transactions
export function formatTransactionAmount(amount: number): string {
  const sign = amount > 0 ? '+' : '';
  return `${sign}₹${Math.abs(amount).toFixed(2)}`;
}