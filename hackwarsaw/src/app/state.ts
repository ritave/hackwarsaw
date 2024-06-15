import { createContext } from "react";

export const ReducerContext = createContext(null);
export const ReducerDispatchContext = createContext(null);

interface User {
  email: string;
}

function appReducer(data: unknown, action: unknown) {
  throw new Error("not implemented");
}
