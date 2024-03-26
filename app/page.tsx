"use client";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { Toolbar } from "primereact/toolbar";
import { Fragment } from "react";

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
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
    refetch,
  } = useQuery(getAllProducts, { pollInterval: 3000 });

  const [createProductMutation] = useMutation(createProduct, {
    refetchQueries: [getAllProducts],
  });

  const [deleteProductMutation] = useMutation(deleteProduct, {
    refetchQueries: [getAllProducts],
  });

  const [updateProductMutation] = useMutation(updateProduct, {
    refetchQueries: [getAllProducts],
  });

  const onCreateProduct = (input: any) => {
    createProductMutation({ variables: { input } });
  };

  const onUpdateProduct = (id: string, input: any) => {
    updateProductMutation({
      variables: { id, input },
      onCompleted: refetch,
    });
  };

  const onDeleteProduct = (id: string) => {
    deleteProductMutation({ variables: { id }, onCompleted: refetch });
  };

  const onAddToStock = (id: string, product: any) => {
    onUpdateProduct(id, { name: product.name, quantity: product.quantity + 1 });
  };

  const onDelete = (id: string) => {
    if (
      window.confirm(
        `Are you sure you want to delete the product with id ${id} ?`
      )
    ) {
      onDeleteProduct(id);
    }
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    const newProduct = {
      name: event.target.name.value,
      quantity: parseInt(event.target.quantity.value),
      price: 10,
    };
    onCreateProduct(newProduct);
    event.target.reset();
  };

  if (productsLoading) return <p>Loading...</p>;

  if (productsError) return <p>Error : {productsError?.message}</p>;

  const actionBodyTemplate = (
    <div className="flex flex-row justify-evenly">
      <Button size="small" icon="pi pi-plus" />
      <Button size="small" icon="pi pi-trash" />
    </div>
  );

  return (
    <main>
      <div className="flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl">Add new product</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
          <div className="flex gap-2">
            <InputText
              id="name"
              name="name"
              required
              placeholder="Product's name"
            />
            <InputNumber id="quantity" name="quantity" placeholder="Quantity" />
          </div>
          <Button className="justify-center" type="submit">
            Save
          </Button>
        </form>
      </div>

      <DataTable
        className="mt-10 mx-6 grid gap-4 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20"
        value={products?.getAllProducts}
        size="small"
        selectionMode="single"
      >
        <Column field="name" header="name" />
        <Column field="price" header="price" />
        <Column field="quantity" header="quantity" />
        <Column header="actions" body={actionBodyTemplate} />
      </DataTable>
    </main>
  );
}
