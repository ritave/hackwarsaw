import { createContext, useContext } from "react";
import { User } from "../model/user";

export const ReducerContext = createContext<State>(null as any);
export const ReducerDispatchContext = createContext<React.Dispatch<Action>>(
  null as any
);

export function useAppState(): [State, React.Dispatch<Action>] {
  const state = useContext(ReducerContext);
  const dispatch = useContext(ReducerDispatchContext);
  return [state, dispatch];
}

export interface State {
  user?: User;
}

export type Action =
  | { type: "logout" }
  | { type: "login"; user: User }
  | { type: "setContribution"; krs: string };

export function appReducer(state: State, action: Action): State {
  switch (action.type) {
    case "logout":
      return { ...state, user: undefined };
    case "login":
      return { ...state, user: action.user };
    case "setContribution":
      if (state.user === undefined) {
        throw new Error("Tried to update logged-out user");
      }
      return { ...state, user: { ...state.user, contributesTo: action.krs } };
  }
}
