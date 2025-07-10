// src/lib/formatCurrency.ts

/**
 * Format number ke mata uang tertentu.
 * Default: SGD (Singapore Dollar)
 */
export function formatCurrency(
  amount: number,
  currency: string = "SGD",
  locale: string = "en-SG"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
