"use client";
import {Button} from "@chakra-ui/button";
import {FormControl, FormLabel} from "@chakra-ui/form-control";
import {Input} from "@chakra-ui/input";
import {Flex, VStack} from "@chakra-ui/layout";
import React from "react";

export default function Page() {
  return (
    <Flex alignItems="center" justifyContent="center" w="100vw" h="100vh">
      <VStack>
        <FormControl>
          <FormLabel>Matching funds</FormLabel>
          <Input value="0"/>
        </FormControl>
        <Button colorScheme="blue">Update</Button>
      </VStack>
    </Flex>
  );
}
