"use client";

import { Badge } from "@chakra-ui/layout";
import React from "react";

export interface Params {
  amount: number;
}

const PlnIntl = new Intl.NumberFormat("pl-PL", {
  style: "currency",
  currency: "PLN",
});

export function Pln({ amount }: Params) {
  return (
    <Badge variant="outline" colorScheme={amount > 0 ? "green" : undefined}>
      {PlnIntl.format(amount)}
    </Badge>
  );
}
