import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Pln } from "./pln";
import React, { useContext } from "react";
import { ReducerContext, useAppState } from "../app/state";

export interface Params {
  name: string;
  krs: string;
  contributors: number;
  totalRaised: number;
}

export function Ngov(params: Params) {
  const [state, dispatch] = useAppState();
  const isLoggedIn = state.user !== undefined;
  const isContributing = state.user?.contributesTo === params.krs;

  function onContribute() {
    dispatch({ type: "setContribution", krs: params.krs });
  }

  return (
    <Card>
      <CardHeader>
        <Heading size="sm">{params.name}</Heading>
        <Text color="gray" fontSize="sm" as="i">
          {params.krs}
        </Text>
      </CardHeader>
      <CardBody flexDirection="column">
        <Badge
          variant="outline"
          colorScheme={params.totalRaised > 0 ? "green" : undefined}
        >
          <Pln amount={params.totalRaised} />
        </Badge>
        <Text>
          Raised by <Badge variant="outline">{params.contributors}</Badge>{" "}
          contributor{params.contributors == 1 ? null : "s"}
        </Text>
      </CardBody>
      <CardFooter>
        <Button
          variant="ghost"
          colorScheme="blue"
          isDisabled={!isLoggedIn || isContributing}
          onClick={onContribute}
        >
          Contribute
        </Button>
      </CardFooter>
    </Card>
  );
}
