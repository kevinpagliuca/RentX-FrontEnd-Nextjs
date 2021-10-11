export function formatToBRL(value: number) {
  let formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  });
  return formatter.format(value);
}
