"use client";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Toolbar } from "primereact/toolbar";
import { TreeTable } from "primereact/treetable";

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
  return (
    <main>
      <Toolbar
        start={
          <>
            <img src="favicon.ico" alt="icon" className="size-12 mr-3" />
            <h1>Store Cube</h1>
          </>
        }
      />

      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Product's name"
        />

        <label htmlFor="quantity">quantity :</label>
        <input type="number" id="quantity" name="quantity" defaultValue={0} />
        <Button label="Save" type="submit" />
      </form>

      {products?.getAllProducts.map((product: any) => (
        <div key={product.id}>
          <div>
            {/* <p> {product.id} -</p> */}
            <h3>{product.name}</h3>
            <p> : {product.quantity}</p>
            <button
              onClick={() =>
                onAddToStock(product.id!, {
                  id: product.id,
                  name: product.name,
                  quantity: product.quantity,
                  price: 100,
                })
              }
            >
              +1
            </button>
            <button

              onClick={() => onDelete(product.id!)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <DataTable
        value={products?.getAllProducts}
        selectionMode="single"
        tableStyle={{ minWidth: "25rem" }}
      >
        <Column field="name" header="name"></Column>
        <Column field="price" header="price"></Column>
      </DataTable>
    </main>
  );
}
