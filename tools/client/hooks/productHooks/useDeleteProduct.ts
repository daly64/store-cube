import { useMutation } from "@apollo/client";
import { productQuery, productMutations } from "../../graphql/Product";

const useDeleteProduct = () => {
  const { getAllProducts } = productQuery;
  const { deleteProduct } = productMutations;

  const [
    deleteProductMutation,
    { loading: deleteProductLoading, error: deleteProductError },
  ] = useMutation(deleteProduct, {
    refetchQueries: [getAllProducts],
  });

  return {
    deleteProduct: deleteProductMutation,
    deleteProductLoading,
    deleteProductError,
  };
};

export default useDeleteProduct;
