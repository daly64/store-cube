import { DialogContext } from "@/tools/client/globalState";
import { useCreateProduct } from "@/tools/client/hooks/ProductHooks";
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
    // useCreateProduct(product),
    toast.current?.show({
      severity: "success",
      summary: "Product added",
      detail: `Product ${product.name} was added successfully`,
    });
    setVisible(false);
  };

  return (
    <div className="sm:w-60p md:w-60p lg:w-60p xl:w-60p mx-auto">
      <Toast ref={toast} />
      <Dialog
        header="Add new product"
        visible={visible}
        onHide={() => {
          setVisible(false);
        }}
      >
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              autoFocus
              className="bg-white p-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <label htmlFor="price" className="font-semibold">
              Price
            </label>
            <input
              id="price"
              name="price"
              required
              type="number"
              className="bg-white p-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <label htmlFor="quantity" className="font-semibold">
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              required
              type="number"
              className="bg-white p-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <Button type="submit" className="mt-4" label="save" />
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default AddProductDialog;
