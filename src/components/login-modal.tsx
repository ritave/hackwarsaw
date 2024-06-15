import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useLayoutEffect, useState } from "react";
import { useAppState } from "../app/state";

export interface Params {
  isOpen: boolean;
  onClose: () => void;
}
export function LoginModal({ isOpen, onClose }: Params) {
  const [state, dispatch] = useAppState();
  const [taxInput, setTaxInput] = useState(0);
  useLayoutEffect(() => {
    setTaxInput(state.user?.taxAmount ?? 0);
  }, [isOpen, state.user?.taxAmount]);

  const onSave = () => {
    dispatch({ type: "setTaxAmount", taxAmount: taxInput });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>User preferences</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <FormControl>
            <FormLabel>Your tax amount for this year</FormLabel>
            <Input
              type="number"
              value={taxInput}
              onChange={(e) => setTaxInput(Number(e.target.value))}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={4} onClick={onSave}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
