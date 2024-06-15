import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Pln } from "./pln";

export interface Params {
  name: string;
  krs: string;
  contributors: number;
  totalRaised: number;
}

export function Ngov(params: Params) {
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
    </Card>
  );
}
