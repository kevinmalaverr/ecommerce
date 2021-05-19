const formater = new Intl.NumberFormat('es-CO')

export function numberToPrice(number: number): string {
  return formater.format(number)
}
