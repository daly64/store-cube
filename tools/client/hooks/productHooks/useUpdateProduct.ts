import { useMutation } from "@apollo/client";
import { Product } from "@prisma/client";
import { productQuery, productMutations } from "../../graphql/Product";

const useUpdateProduct = () => {
  const { getAllProducts } = productQuery;
  const { updateProduct } = productMutations;

  const [
    updateProductMutation,
    { loading: updateProductLoading, error: updateProductError },
  ] = useMutation(updateProduct, {
    refetchQueries: [getAllProducts],
  });

  return {
    updateProduct: updateProductMutation,
    updateProductLoading,
    updateProductError,
  };
};

export default useUpdateProduct;
