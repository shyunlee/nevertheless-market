import { format } from "timeago.js";

export function formatCurrencyNumber(amount: number): string {
  return  new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);  
}

export function formatTimeAgo(date: string): string {
  return format(date)

}