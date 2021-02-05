export function numberToPrice(number: number): string {
  return `$${number.toLocaleString()}`
}
