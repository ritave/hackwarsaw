import { Input } from "@chakra-ui/input";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export interface Params {
  onSearch: (filter: string) => void;
}

export function Filter({ onSearch }: Params) {
  const [search, setSearch] = useState("");
  const debouncedOnSearch = useDebouncedCallback(() => {
    onSearch(search);
  }, 200);

  const onChange = (filter: string) => {
    setSearch(filter);
    debouncedOnSearch();
  };

  return (
    <Input
      placeholder="Filter"
      size="sm"
      maxWidth={400}
      value={search}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
