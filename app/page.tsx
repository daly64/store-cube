"use client";
import ProductsTable from "@/components/ProductsTable";
import { Button } from "primereact/button";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useRef,
  useState,
} from "react";
import AddProductDialog from "@/components/AddProductDialog";
import { DialogContext } from "@/tools/client/globalState";

//  a global context state

export default function Home() {
  const [visible, setVisible] = useState<boolean>();

  //  const DialogContext = createContext<{
  //   visible: boolean | undefined;
  //   setVisible: Dispatch<SetStateAction<boolean | undefined>>;
  // }>({ visible: false, setVisible: () => {} });

  return (
    <main>
      <DialogContext.Provider
        value={{ visible: visible, setVisible: setVisible }}
      >
        <AddProductDialog />
      </DialogContext.Provider>

      <Button
        label="Add new product"
        icon="pi pi-plus"
        onClick={() => setVisible(!visible)}
      />
      <ProductsTable />
    </main>
  );
}
