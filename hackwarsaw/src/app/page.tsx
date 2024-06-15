"use client";
import { Ngov, Params as NgovParams } from "./components/ngov";
import { Grid, GridItem, Input, SimpleGrid } from "@chakra-ui/react";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";

export default function Page() {
  const fuse = new Fuse(FAKE_DATA_NGOVS, {
    findAllMatches: true,
    isCaseSensitive: false,
    keys: ["name"],
    shouldSort: false,
  });

  const [ngovs, setNgovs] = useState(FAKE_DATA_NGOVS);

  const updateSearchData = (filter: string) => {
    if (filter.length === 0) {
      setNgovs(FAKE_DATA_NGOVS);
    } else {
      const results = fuse.search(filter);
      const items = results.map((result) => result.item);
      setNgovs(items);
    }
  };

  return (
    <Grid
      templateAreas={`
      "filter"
      "ngovs"
    `}
      m={4}
      gap={4}
    >
      <GridItem area={"filter"}>
        <Input
          placeholder="Filter"
          size="sm"
          maxWidth={400}
          onChange={(e) => updateSearchData(e.target.value)}
        />
      </GridItem>
      <GridItem area={"ngovs"}>
        <SimpleGrid columns={5} spacing={4}>
          {ngovs.map(({ contributors, name, krs, totalRaised }) => (
            <Ngov
              contributors={contributors}
              krs={krs}
              name={name}
              totalRaised={totalRaised}
              key={krs}
            />
          ))}
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
}

const FAKE_DATA_NGOVS: NgovParams[] = [
  {
    name: 'STOWARZYSZENIE POMOCY DZIECIOM Z PORAŻENIEM MÓZGOWYM "JASNY CEL"',
    contributors: 1,
    krs: "0000000168",
    totalRaised: 150,
  },
  {
    name: "FUNDACJA NA RZECZ POMOCY DZIECIOM Z GRODZIEŃSZCZYZNY",
    contributors: 0,
    krs: "0000000291",
    totalRaised: 0,
  },
  {
    name: "KUJAWSKO-POMORSKI ZWIĄZEK LEKKIEJ ATLETYKI",
    contributors: 12,
    krs: "0000000594",
    totalRaised: 420420,
  },
];
