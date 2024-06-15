import { useContext, useState } from "react";
import { useAppState } from "../app/state";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { User } from "../model/user";

const usersByEmail = new Map<string, User>();

async function getOrCreateAccount(email: string) {
  let user = usersByEmail.get(email);
  if (user === undefined) {
    user = { email, taxAmount: 0 };
    usersByEmail.set(email, { ...user });
  }
  return user;
}

export function Login() {
  const [state, dispatch] = useAppState();
  const [emailInput, setEmailInput] = useState<string>("");

  const onLogin = async () => {
    if (emailInput === "") {
      return;
    }
    const user = await getOrCreateAccount(emailInput);
    setEmailInput("");
    dispatch({ type: "login", user });
  };

  const onLogout = () => {
    dispatch({ type: "logout" });
  };

  return state.user ? (
    <Button colorScheme="blue" size="sm" onClick={onLogout}>
      Log-out
    </Button>
  ) : (
    <>
      <Input
        placeholder="E-Mail"
        size="sm"
        maxWidth={200}
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <Button colorScheme="blue" size="sm" onClick={(e) => onLogin()}>
        Login
      </Button>
    </>
  );
}
