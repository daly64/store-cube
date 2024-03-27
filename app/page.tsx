"use client";
import ProductsTable from "@/components/ProductsTable";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Dispatch, SetStateAction, createContext, useRef, useState } from "react";
import AddProductDialog from "@/components/AddProductDialog";

export const DialogContext = createContext<{visible:boolean|undefined,setVisible: Dispatch<SetStateAction<boolean | undefined>>}>(
  {visible:false,setVisible:()=>{}}
);
export default function Home() {
  const [visible, setVisible] = useState<boolean>();
  return (
    <main>
      
      <DialogContext.Provider value={{visible:visible,setVisible:setVisible}}>
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
