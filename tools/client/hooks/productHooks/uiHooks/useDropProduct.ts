import { defaultProduct } from "../../../zustand/producctStore";
import useDeleteProduct from "../graphqlHooks/useDeleteProduct";

const useDropProduct = (set: any, get: any) => {
  const { deleteProduct } = useDeleteProduct();
  function dropProduct() {
    // prevent default
    const event = window.event || arguments[0];
    event.preventDefault();

    // delete product
deleteProduct({ variables: { id: get().selectedProduct.id } });

    // clear selected product
    set((state: any) => ({ selectedProduct: defaultProduct }));
  }
  return { dropProduct };
};
export default useDropProduct;