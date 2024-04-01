import useUpdateProduct from "@/tools/client/hooks/productHooks/useUpdateProduct";
import Product from "@/tools/client/types/Product";
import useStore from "@/tools/client/zustand/store";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

const EditProductDialog = () => {
  const { toggleEditProductDialog, editProductDialogState, selectedProduct } =
    useStore();

  const [product, setProduct] = useState<Product>(selectedProduct);

  const { updateProduct } = useUpdateProduct();
  const onSubmit = (event: any) => {
    event.preventDefault();
    const newProduct: Product = {
      name: event.target.name.value,
      price: Number(event.target.price.value),
      quantity: Number(event.target.quantity.value),
    };
    updateProduct({ variables: { id: selectedProduct.id, input: newProduct } });

    toggleEditProductDialog();
  };

  return (
    <div className="sm:w-60p md:w-60p lg:w-60p xl:w-60p mx-auto">
      <Dialog
        header="Edit product"
        visible={editProductDialogState}
        onHide={toggleEditProductDialog}
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
            <InputText
              id="name"
              name="name"
              required
              autoFocus
              value={selectedProduct.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />

            <label htmlFor="price" className="font-semibold">
              Price
            </label>
            <input
              id="price"
              name="price"
              required
              type="number"
              defaultValue={selectedProduct.price}
              inputMode="decimal"
              className=" p-inputtext-lg p-inputtext-filled p-inputnumber-lg appearance-none border border-gray-300 rounded-md w-full bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:ring-opacity-50 focus:border-opacity-50 caret-none"
              step={0.001}
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
              defaultValue={selectedProduct.quantity}
            />

            <Button type="submit" className="mt-4" label="save" />
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default EditProductDialog;
