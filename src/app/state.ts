import { createContext, useContext } from "react";
import { User } from "../model/user";
import { NonGov } from "../model/nonGov";

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
  ngovs: NonGov[];
  search: string;
}

export type Action =
  | { type: "logout" }
  | { type: "login"; user: User }
  | { type: "setContribution"; krs: string }
  | { type: "setTaxAmount"; taxAmount: number }
  | { type: "setSearch"; search: string }
  | { type: "setNgovs"; ngovs: NonGov[] };

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
    case "setTaxAmount":
      if (state.user === undefined) {
        throw new Error("Tried to update logged-out user");
      }
      return { ...state, user: { ...state.user, taxAmount: action.taxAmount } };
    case "setNgovs":
      return { ...state, ngovs: action.ngovs };
    case "setSearch":
      return { ...state, search: action.search };
  }
}
