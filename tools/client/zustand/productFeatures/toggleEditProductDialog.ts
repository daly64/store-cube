
const toggleEditProductDialog = (set:any) => {
 set((state: { editProductDialogState: Boolean; }) => ({ editProductDialogState: !state.editProductDialogState })
 )
  
};
// Toggle edit product dialog visibility
export default toggleEditProductDialog