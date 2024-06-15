import { createContext } from "react";
import { User } from "../model/user";

export const ReducerContext = createContext<State>(null as any);
export const ReducerDispatchContext = createContext<React.Dispatch<Action>>(
  null as any
);

export interface State {
  user?: User;
}

export type Action = { type: "logout" } | { type: "login"; user: User };

export function appReducer(state: State, action: Action): State {
  switch (action.type) {
    case "logout":
      return { ...state, user: undefined };
    case "login":
      return { ...state, user: action.user };
  }
}
