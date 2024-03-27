import { Dispatch, SetStateAction, createContext } from "react";
//  a global context state
export const DialogContext = createContext<{
  visible: boolean | undefined;
  setVisible: Dispatch<SetStateAction<boolean | undefined>>;
}>({ visible: false, setVisible: () => {} });
