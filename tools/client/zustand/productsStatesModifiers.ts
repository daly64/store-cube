import Product from "../types/Product";
import productStore from "../types/productStore";

function toggleAddProductDialog(set: (partial: productStore | Partial<productStore> | ((state: productStore) => productStore | Partial<productStore>), replace?: boolean | undefined) => void): void {
  return set((state) => ({ addProductDialogState: !state.addProductDialogState }));
}

function toggleEditProductDialog(set: (partial: productStore | Partial<productStore> | ((state: productStore) => productStore | Partial<productStore>), replace?: boolean | undefined) => void): void {
  return set((state) => ({ editProductDialogState: !state.editProductDialogState }));
}

function setSelectedProduct(set: (partial: productStore | Partial<productStore> | ((state: productStore) => productStore | Partial<productStore>), replace?: boolean | undefined) => void, product: Product): void {
  return set({ selectedProduct: { ...product } });
}

function setNewProduct(set: (partial: productStore | Partial<productStore> | ((state: productStore) => productStore | Partial<productStore>), replace?: boolean | undefined) => void, product: Product): void {
  return set({ newProduct: { ...product } });
}

function setModifiedProduct(set: (partial: productStore | Partial<productStore> | ((state: productStore) => productStore | Partial<productStore>), replace?: boolean | undefined) => void, product: Product): void {
  return set({ modifiedProduct: { ...product } });
}

export { toggleAddProductDialog, toggleEditProductDialog, setSelectedProduct, setNewProduct, setModifiedProduct }