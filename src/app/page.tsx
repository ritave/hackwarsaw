"use client";
import { Ngov } from "../components/ngov";
import { Grid, GridItem, HStack, SimpleGrid, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { MockNonGovService } from "@/services/NonGovService";
import React from "react";
import { Login } from "../components/login";
import { Filter } from "../components/filter";

const nonGovSrv = new MockNonGovService();

export default function Page() {
  const [ngovs, setNgovs] = useState(nonGovSrv.list(""));

  const onSearch = (filter: string) => {
    setNgovs(nonGovSrv.list(filter));
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
      <GridItem area="filter">
        <HStack spacing={4}>
          <Filter onSearch={onSearch} />
          <Spacer />
          <Login />
        </HStack>
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
