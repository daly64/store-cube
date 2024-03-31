import { addDialogContext } from "@/tools/client/globalState";
import React, { useState } from "react";
import AddProductDialog from "./AddProductDialog";
import { Button } from "primereact/button";

const AddProductButton = () => {
  const [visible, setVisible] = useState<boolean>();
  return (
    <>
      <addDialogContext.Provider
        value={{ visible: visible, setVisible: setVisible }}
      >
        <AddProductDialog />
      </addDialogContext.Provider>

      <Button
        raised
        label="Add new product"
        icon="pi pi-plus"
        onClick={() => setVisible(!visible)}
      />
    </>
  );
};

export default AddProductButton;
