import Product from "../types/Product";

function toggleAddProductDialog(set: any): void {
  return set((state:any) => ({ addProductDialogState: !state.addProductDialogState }));
}

function toggleEditProductDialog(set: any): void {
  return set((state: any) => ({
    editProductDialogState: !state.editProductDialogState,
  }));
}

function setSelectedProduct(set: any, product: Product): void {
  return set({ selectedProduct: { ...product } });
}

function setNewProduct(set: any, product: Product): void {
  return set({ newProduct: { ...product } });
}

function setModifiedProduct(set: any, product: Product): void {
  return set({ modifiedProduct: { ...product } });
}

export { setModifiedProduct, setNewProduct, setSelectedProduct, toggleAddProductDialog, toggleEditProductDialog };
