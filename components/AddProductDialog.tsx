import useCreateProduct from "@/tools/client/hooks/productHooks/useCreateProduct";
import Product from "@/tools/client/types/Product";
import useStore from "@/tools/client/zustand/store";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

const AddProductDialog = () => {
  const { toggleAddProductDialog, addProductDialogState } = useStore();
  const { createProduct } = useCreateProduct();

  const [product, setProduct] = useState<Product>({
    name: "",
    quantity: 0,
    price: 0,
  });

  const onSubmit = (event: any) => {
    event.preventDefault();
    const createdProduct: Product = {
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    };
    createProduct({ variables: { input: createdProduct } });

    toggleAddProductDialog();
  };

  return (
    <div className="sm:w-60p md:w-60p lg:w-60p xl:w-60p mx-auto">
      <Dialog
        header="Add New Product"
        visible={addProductDialogState}
        onHide={toggleAddProductDialog}
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
              required
              autoFocus
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />

            <label htmlFor="price" className="font-semibold">
              Price
            </label>
            <InputNumber
              inputId="currency-india"
              value={product.price}
              onValueChange={(e) =>
                setProduct({ ...product, price: Number(e.value) })
              }
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
              onValueChange={(e) =>
                setProduct({ ...product, quantity: Number(e.value) })
              }
              mode="decimal"
              showButtons
              min={1}
              max={100}
            />

            <Button type="submit" className="mt-4" label="save" />
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default AddProductDialog;
