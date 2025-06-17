import { format } from "timeago.js";

export function formatCurrencyNumber(amount: number): string {
  return  new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);  
}

export function formatTimeAgo(date: Date): string {
  const createdAt = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
  return format(createdAt)

}