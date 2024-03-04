export function formatNumber(number: number): string {
  return number.toString().padStart(4, '0');
}
