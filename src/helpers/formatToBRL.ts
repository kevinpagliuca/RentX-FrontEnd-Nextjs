export function formatToBRL(value: number) {
  const formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  });
  return formatter.format(value);
}
