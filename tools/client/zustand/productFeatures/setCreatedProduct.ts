import Product from "../../types/Product";

 const setCreatedProduct = (product: Product, set: any) =>
   set(() => ({
     createdProduct: { ...product },
   }));

  export default setCreatedProduct;