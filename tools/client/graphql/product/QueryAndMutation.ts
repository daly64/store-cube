import gql from "graphql-tag";

const getAllProducts = gql`
  query {
    getAllProducts {
      id
      name
      price
      quantity
    }
  }
`;
const createProduct = gql`
  mutation CreateProduct($input: ProductInput!) {
    createProduct(input: $input) {
      id
      name
      price
    }
  }
`;
const updateProduct = gql`
  mutation UpdateProduct($id: ID!, $input: ProductInput!) {
    updateProduct(id: $id, input: $input) {
      id
      name
      price
    }
  }
`;

const deleteProduct = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`;

export  { getAllProducts, createProduct, updateProduct, deleteProduct };