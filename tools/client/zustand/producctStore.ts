import { create } from "zustand";
import Product from "../types/Product";
import { 
  defaultProduct,
  setSelectedProduct,
  toggleAddProductDialog,
   toggleEditProductDialog
   } from "./productFeatures";


type productStore = {
  addProductDialogState: boolean;
  editProductDialogState: boolean;
  selectedProduct: Product;
  toggleAddProductDialog: () => void;
  toggleEditProductDialog: () => void;
  setSelectedProduct: (product: Product) => void;
};

const useProductStore = create<productStore>((set) => ({
  addProductDialogState: false,
  editProductDialogState: false,
  selectedProduct: defaultProduct,
  toggleAddProductDialog: () => toggleAddProductDialog(set),
  toggleEditProductDialog: () => toggleEditProductDialog(set),
  setSelectedProduct: (product: Product) => setSelectedProduct(product, set),
 }));

export default useProductStore;
