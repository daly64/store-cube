const toggleAddProductDialog = (set: any) =>
  set((state: { addProductDialogState: Boolean }) => ({
    addProductDialogState: !state.addProductDialogState,
  })); // toggleAddProductDialog
export default toggleAddProductDialog;
