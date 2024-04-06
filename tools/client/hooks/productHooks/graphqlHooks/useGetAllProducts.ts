import { useQuery } from "@apollo/client";
import { productQuery } from "../../../graphql/Product";

const useGetAllProducts = () => {
  const { getAllProducts } = productQuery;
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
    refetch,
  } = useQuery(getAllProducts, { pollInterval: 3000 });

  return {
    products: products?.getAllProducts,
    productsLoading,
    productsError,
    refetch,
  };
};
export default useGetAllProducts;
