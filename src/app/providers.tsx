"use client";
import React, {useReducer} from "react";
import {ChakraProvider} from "@chakra-ui/react";
import {ReducerContext, ReducerDispatchContext, appReducer} from "./state";

export function Providers({children}: { children: React.ReactNode }) {
  const [reducer, dispatch] = useReducer(appReducer, {});
  return (
    <ChakraProvider>
      <ReducerContext.Provider value={reducer}>
        <ReducerDispatchContext.Provider value={dispatch}>
          {children}
        </ReducerDispatchContext.Provider>
      </ReducerContext.Provider>
    </ChakraProvider>
  );
}
