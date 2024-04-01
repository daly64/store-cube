import { create } from "zustand";
import Product from "../types/Product";
type Store = {
  addProductDialogState: boolean;
  editProductDialogState: boolean;
  selectedProduct: Product;
  toggleAddProductDialog: () => void;
  toggleEditProductDialog: () => void;
  setSelectedProduct: (product: Product) => void;
};

const useStore = create<Store>((set) => ({
  addProductDialogState: false,
  editProductDialogState: false,
  selectedProduct: { name: "", price: 0, quantity: 0 },
  toggleAddProductDialog: () =>
    set((state) => ({ addProductDialogState: !state.addProductDialogState })),
  toggleEditProductDialog: () =>
    set((state) => ({ editProductDialogState: !state.editProductDialogState })),
  setSelectedProduct: (product: Product) =>
    set((state) => ({
      selectedProduct: { ...product },
    })),
}));

export default useStore;
