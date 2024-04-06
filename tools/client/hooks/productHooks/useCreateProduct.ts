import { useMutation } from "@apollo/client";
import { productMutations, productQuery } from "../../graphql/Product";

const useCreateProduct = () => {
  const { getAllProducts } = productQuery;
  const { createProduct } = productMutations;

  const [
    createProductMutation,
    { loading: createProductLoading, error: createProductError },
  ] = useMutation(createProduct, {
    refetchQueries: [getAllProducts],
  });

  return {
    createProduct: createProductMutation,
    createProductLoading,
    createProductError,
  };
};

export default useCreateProduct;
