"use client";
import { Ngov } from "../components/ngov";
import { Grid, GridItem, HStack, SimpleGrid, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MockNonGovService } from "@/services/NonGovService";
import React from "react";
import { Login } from "../components/login";
import { Filter } from "../components/filter";
import { useAppState } from "./state";

const nonGovSrv = new MockNonGovService();

export default function Page() {
  const [state, dispatch] = useAppState();

  useEffect(() => {
    nonGovSrv.updateContributions().then(() => {
      dispatch({ type: "setNgovs", ngovs: nonGovSrv.list(state.search) });
    });
  }, [dispatch, state.search, state.user]);

  const onSearch = (search: string) => {
    dispatch({ type: "setSearch", search });
    dispatch({ type: "setNgovs", ngovs: nonGovSrv.list(search) });
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
          {state.ngovs.map(({ contributors, name, krs, totalRaised }) => (
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
