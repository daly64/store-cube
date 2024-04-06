import { create } from "zustand";
import Product from "../types/Product";
import useSaveProduct from "../hooks/productHooks/uiHooks/useSaveProduct";
import productStore from "../types/productStore";
import { toggleAddProductDialog, toggleEditProductDialog, setSelectedProduct, setNewProduct, setModifiedProduct } from "./productsStatesModifiers";
import useEditProduct from "../hooks/productHooks/uiHooks/useEditProduct";
import useDropProduct from "../hooks/productHooks/uiHooks/useDropProduct";



 export const defaultProduct = { name: "", price: 0, quantity: 0 };


const useProductStore = create<productStore>((set, get) => ({
  addProductDialogState: false,
  editProductDialogState: false,
  selectedProduct: defaultProduct,
  newProduct: defaultProduct,
  toggleAddProductDialog: () => toggleAddProductDialog(set),
  toggleEditProductDialog: () => toggleEditProductDialog(set),
  setSelectedProduct: (product: Product) => setSelectedProduct(set, product),
  setNewProduct: (product: Product) => setNewProduct(set, product),
  setModifiedProduct: (product: Product) => setModifiedProduct(set, product),
  useSaveProduct: () => useSaveProduct(set, get),
  useEditeProduct: () => useEditProduct(set, get),
  useDropProduct: () => useDropProduct(set, get),
}));

export default useProductStore;
