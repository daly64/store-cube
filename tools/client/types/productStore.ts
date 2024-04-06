import Product from "./Product";

type productStore = {
  addProductDialogState: boolean;
  editProductDialogState: boolean;
  selectedProduct: Product;
  newProduct: Product;
  toggleAddProductDialog: () => void;
  toggleEditProductDialog: () => void;
  setSelectedProduct: (product: Product) => void;
  setNewProduct: (product: Product) => void;
  useSaveProduct: () => { saveProduct: () => void };
  useEditeProduct: () => { editProduct: () => void };
  useDropProduct: () => { dropProduct: () => void };
};
export default productStore