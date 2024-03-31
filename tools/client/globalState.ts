import { Dispatch, SetStateAction, createContext } from "react";
//  a global context state
export const addDialogContext = createContext<{
  visible: boolean | undefined;
  setVisible: Dispatch<SetStateAction<boolean | undefined>>;
}>({ visible: false, setVisible: () => {} });
export const editDialogContext = createContext<{
  visible: boolean | undefined;
  setVisible: Dispatch<SetStateAction<boolean | undefined>>;
}>({ visible: false, setVisible: () => {} });
