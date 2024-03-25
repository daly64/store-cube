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
      <Toolbar
        className="h-16  flex justify-between items-center bg-gray-100 text-blue-600 border-b-2 border-gray-300"
        start={
          <div className="flex items-center">
            <img src="favicon.ico" alt="icon" className="h-8 w-8 mr-2" />
            <h2 className="text-xl font-semibold">Store Cube</h2>
          </div>
        }
      />

      <div className="flex flex-col gap-4">
        <h2 className="mt-4 ml-6 text-2xl">Add new product</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
          <div className="m-auto flex flex-row gap-6">
            <div className=" flex flex-row gap-2 ">
              <InputText
                id="name"
                name="name"
                required
                placeholder="Product's name"
              />
              <InputNumber
                id="quantity"
                name="quantity"
                placeholder="Quantity"
                defaultValue={0}
              />
            </div>
            <Button size="small" label="Save" type="submit" />
          </div>
        </form>
      </div>

      <DataTable
        className="w-full my-10"
        value={products?.getAllProducts}
        size="small"
        selectionMode="single"
        tableStyle={{ minWidth: "25rem" }}
      >
        <Column field="name" header="name" />
        <Column field="price" header="price" />
        <Column field="quantity" header="quantity" />
        <Column header="actions" body={actionBodyTemplate} />
      </DataTable>
    </main>
  );
}
