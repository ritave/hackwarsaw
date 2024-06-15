"use client";
export interface Params {
  amount: number;
}

const PlnIntl = new Intl.NumberFormat("pl-PL", {
  style: "currency",
  currency: "PLN",
});

export function Pln({ amount }: Params) {
  return PlnIntl.format(amount);
}
