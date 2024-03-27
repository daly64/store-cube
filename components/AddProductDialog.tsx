import { DialogContext } from "@/tools/client/globalState";
import { Product } from "@prisma/client";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import React, { useContext, useRef, useState } from "react";



const AddProductDialog = () => {
  const toast = useRef<Toast>(null);
  const { visible, setVisible } = useContext(DialogContext);

  const onSubmit = (event: any) => {
    event.preventDefault();
    const product: Product = {
      id: "0",
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
    };

    toast.current?.show({
      severity: "success",
      summary: "Product added",
      detail: `Product ${product.name} was added successfully`,
    });
    setVisible(false);
  };

  return (
    <>
      <Toast ref={toast} />
      <Dialog
        header="Add new product"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => {
          setVisible(false);
        }}
      >
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="name">Name</label>
              <InputText id="name" name="name" required autoFocus />
            </div>
            <div className="p-field">
              <label htmlFor="price">Price</label>
              <InputNumber id="price" name="price" required suffix=" Dt" />
            </div>
            <div className="p-field">
              <label htmlFor="quantity">Quantity</label>
              <InputNumber id="quantity" name="quantity" required />
            </div>
            <Button
              type="submit"
              label="Add"
              icon="pi pi-check"
              className="p-button-success"
            />
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default AddProductDialog;
