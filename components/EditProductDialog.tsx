import useUpdateProduct from "@/tools/client/hooks/productHooks/graphqlHooks/useUpdateProduct";
import Product from "@/tools/client/types/Product";
import useProductStore from "@/tools/client/zustand/producctStore";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";

const EditProductDialog = () => {
  const {
    toggleEditProductDialog,
    editProductDialogState,
    selectedProduct: product,
    setSelectedProduct: setProduct,
    useEditeProduct,
  } = useProductStore();

const { editProduct } = useEditeProduct();
   const setName = (e: any) => {
     setProduct({ ...product, name: e.target.value });
   };
   const setPrice = (e: any) => {
     setProduct({ ...product, price: Number(e.value) });
   };
   const setQuantity = (e: any) => {
     setProduct({ ...product, quantity: Number(e.value) });
   };

  return (
    <div className="sm:w-60p md:w-60p lg:w-60p xl:w-60p mx-auto">
      <Dialog
        header="Edit product"
        visible={editProductDialogState}
        onHide={toggleEditProductDialog}
      >
        <form onSubmit={editProduct}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <InputText
              required
              autoFocus
              value={product.name}
              onChange={(e) => setName(e)}
            />

            <label htmlFor="price" className="font-semibold">
              Price
            </label>
            <InputNumber
              inputId="currency-india"
              value={product.price}
              onValueChange={(e) => setPrice(e)}
              mode="currency"
              currency="TND"
              currencyDisplay="code"
              locale="en-TN"
            />

            <label htmlFor="quantity" className="font-semibold">
              Quantity
            </label>
            <InputNumber
              value={product.quantity}
              onValueChange={(e) => setQuantity(e)}
              mode="decimal"
              showButtons
              min={1}
            />

            <Button type="submit" className="mt-4" label="save" />
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default EditProductDialog;
