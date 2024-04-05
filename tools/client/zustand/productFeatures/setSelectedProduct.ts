import Product from "../../types/Product";

 const setSelectedProduct = (product: Product,set: any) =>
set(() => ({
      selectedProduct: { ...product },
    }))

  export default setSelectedProduct