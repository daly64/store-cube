import { useMutation } from "@apollo/client";
import { productMutations, productQuery } from "../../../graphql/Product";

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
