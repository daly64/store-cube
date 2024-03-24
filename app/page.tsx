"use client";
import { gql, useQuery, useMutation } from "@apollo/client";

const getAllProducts = gql`
  query {
    getAllProducts {
      id
      name
      price
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

const deleteProduct = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id)
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

export default function Home() {
  return (
    <main>
      <h1>Store Cube</h1>
    </main>
  );
}
