import useCreateProduct from "../graphqlHooks/useCreateProduct";
import { defaultProduct } from "../../../zustand/producctStore";

const useSaveProduct = (set: any, get: any) => {
  const { createProduct } = useCreateProduct();
  function saveProduct() {
    // prevent default
    const event = window.event || arguments[0];
    event.preventDefault();
    // save product
    createProduct({ variables: { input: get().newProduct } });
    // close add dialog
    set((state: any) => ({ addProductDialogState: !state.addProductDialogState }));
    // clear new product
    set((state: any) => ({ newProduct: defaultProduct }));
  }
  return { saveProduct };
};
export default useSaveProduct;