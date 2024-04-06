import Product from "@/tools/client/types/Product";
import { defaultProduct } from "../../../zustand/producctStore";
import useUpdateProduct from "../graphqlHooks/useUpdateProduct";

const useEditProduct = (set: any, get: any) => {
  const { updateProduct } = useUpdateProduct();
  function editProduct() {
    // prevent default
    const event = window.event || arguments[0];
    event.preventDefault();
    // Update product
    const newProduct: Product = {
      name: get().selectedProduct.name,
      price: get().selectedProduct.price,
      quantity: get().selectedProduct.quantity,
    };
    updateProduct({
      variables: { id: get().selectedProduct.id, input: newProduct },
    });
    // close edit dialog
    set((state: any) => ({
      editProductDialogState: !state.editProductDialogState,
    }));
    // clear selected product
    set((state: any) => ({ selectedProduct: defaultProduct }));
  }
  return { editProduct };
};
export default useEditProduct;