"use client";
import {Ngov, Params as NgovParams} from "../components/ngov";
import {
    Grid,
    GridItem,
    HStack,
    Input,
    SimpleGrid,
    Spacer,
} from "@chakra-ui/react";
import Fuse from "fuse.js";
import {useState} from "react";
import {MockNonGovService} from "@/services/NonGovService";
import React from "react";
import {Login} from "../components/login";

const nonGovSrv = new MockNonGovService();

export default function Page() {
    const [ngovs, setNgovs] = useState(nonGovSrv.list(""));

    const updateSearchData = (filter: string) => {
        let ngovs = nonGovSrv.list(filter)
        setNgovs(ngovs)
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
                    <Input
                        placeholder="Filter"
                        size="sm"
                        maxWidth={400}
                        onChange={(e) => updateSearchData(e.target.value)}
                    />
                    <Spacer/>
                    <Login/>
                </HStack>
            </GridItem>
            <GridItem area={"ngovs"}>
                <SimpleGrid columns={5} spacing={4}>
                    {ngovs.map(({contributors, name, krs, totalRaised}) => (
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
