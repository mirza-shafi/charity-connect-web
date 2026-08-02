export type CurrencyCode = "USD" | "BDT";

interface CurrencyDef {
  code: CurrencyCode;
  label: string;
  symbol: string;
  // Fixed conversion rate from 1 USD into this currency. Display-only —
  // the actual Stripe charge always happens in USD regardless of the
  // currency selected here.
  rateFromUsd: number;
  fractionDigits: number;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyDef> = {
  USD: { code: "USD", label: "USD ($)", symbol: "$", rateFromUsd: 1, fractionDigits: 2 },
  BDT: { code: "BDT", label: "BDT (৳ Taka)", symbol: "৳", rateFromUsd: 122, fractionDigits: 0 },
};

export function formatCurrency(usdCents: number, currency: CurrencyCode): string {
  const def = CURRENCIES[currency];
  const amount = (usdCents / 100) * def.rateFromUsd;
  return `${def.symbol}${amount.toLocaleString(undefined, {
    minimumFractionDigits: def.fractionDigits,
    maximumFractionDigits: def.fractionDigits,
  })}`;
}
