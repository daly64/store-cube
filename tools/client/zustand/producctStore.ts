import { create } from "zustand";
import Product from "../types/Product";
import useCreateProduct from "../hooks/productHooks/useCreateProduct";


 export const defaultProduct = { name: "", price: 0, quantity: 0 };
type productStore = {
  addProductDialogState: boolean;
  editProductDialogState: boolean;
  selectedProduct: Product;
  newProduct: Product;
  toggleAddProductDialog: () => void;
  toggleEditProductDialog: () => void;
  setSelectedProduct: (product: Product) => void;
  setNewProduct: (product: Product) => void;
  useSaveProduct: (product: Product) => { saveProduct: () => void };
};

const useProductStore = create<productStore>((set,get) => ({
  addProductDialogState: false,
  editProductDialogState: false,
  selectedProduct: defaultProduct,
  newProduct: defaultProduct,
  toggleAddProductDialog: () => set((state) => ({ addProductDialogState: !state.addProductDialogState })),
  toggleEditProductDialog: () => set((state) => ({ editProductDialogState: !state.editProductDialogState })),
  setSelectedProduct: (product: Product) => set(({ selectedProduct: { ...product } })),
  setNewProduct: (product: Product) => set(({ newProduct: { ...product } })),
  useSaveProduct: () => {
       const { createProduct } = useCreateProduct();
       function saveProduct() {
        // prevent default
        const event = window.event || arguments[0];
        event.preventDefault();
        // save product
         createProduct({ variables: { input: get().newProduct } });
        // close add dialog 
        set((state) => ({
          addProductDialogState: !state.addProductDialogState,
        }));
        // clear new product
        set((state) => ({
          newProduct: defaultProduct,
        }));
       }
      return { saveProduct }; 
  },
 }));

export default useProductStore;
