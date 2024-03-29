import Product from "../types/Product";
import { useMutation, useQuery } from "@apollo/client";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../graphql/product/QueryAndMutation";
export function useAllProducts() {
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
}

export function useCreateProduct(Product: Product) {
  const [createProductMutation, { loading, error }] = useMutation(
    createProduct,
    {
      refetchQueries: [getAllProducts],
    }
  );
  createProductMutation({ variables: { Product } });
  // const onCreateProduct = (Product: Product) => {
  //   createProductMutation({ variables: { Product } });
  // };

  return {
    // onCreateProduct,
    loading,
    error,
  };
}

export function useUpdateProduct() {
  const [updateProductMutation, { loading, error }] = useMutation(
    updateProduct,
    {
      refetchQueries: [getAllProducts],
    }
  );

  const onUpdateProduct = (id: string, input: any) => {
    updateProductMutation({ variables: { id, input } });
  };

  return {
    onUpdateProduct,
    loading,
    error,
  };
}

export function useDeleteProduct() {
  const [deleteProductMutation] = useMutation(deleteProduct, {
    refetchQueries: [getAllProducts],
  });

  const onDeleteProduct = (id: string) => {
    deleteProductMutation({ variables: { id } });
  };

  return {
    onDeleteProduct,
  };
}
