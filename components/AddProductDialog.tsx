import { addDialogContext } from "@/tools/client/globalState";
import useCreateProduct from "@/tools/client/hooks/productHooks/useCreateProduct";
import Product from "@/tools/client/types/Product";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import { useContext, useRef } from "react";

const AddProductDialog = () => {
  const toast = useRef<Toast>(null);
  const { visible, setVisible } = useContext(addDialogContext);
  const { createProduct } = useCreateProduct();
  const onSubmit = (event: any) => {
    event.preventDefault();
    const product: Product = {
      name: event.target.name.value,
      price: Number(event.target.price.value),
      quantity: Number(event.target.quantity.value),
    };
    createProduct({ variables: { input: product } });
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
