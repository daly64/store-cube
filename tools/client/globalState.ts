import { Dispatch, SetStateAction, createContext } from "react";

export const DialogContext = createContext<{
    visible: boolean | undefined;
    setVisible: Dispatch<SetStateAction<boolean | undefined>>;
  }>({ visible: false, setVisible: () => {} });