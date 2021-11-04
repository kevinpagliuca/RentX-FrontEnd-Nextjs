export function formatToBRL(value: number) {
  const formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  });
  return formatter.format(value);
}
