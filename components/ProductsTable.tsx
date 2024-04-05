import useGetAllProducts from "@/tools/client/hooks/productHooks/useGetAllProducts";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import PopupDoc from "./PopupDoc";

const ProductsTable = () => {
  // const { productsLoading, productsError, products } = useAllProducts();
  const { products, productsLoading, productsError } = useGetAllProducts();

  if (productsLoading) return <p>Loading...</p>;

  if (productsError) return <p>Error : {productsError?.message}</p>;

  return (
    <DataTable
      value={products}
      paginator
      rows={5}
      rowsPerPageOptions={[5, 10, 25, 50]}
      size="small"
      selectionMode="single"
    >
      <Column field="name" header="name" />
      <Column
        field="price"
        body={(rowData) => rowData.price.toFixed(3)}
        header="price (TND)"
      />
      <Column field="quantity" header="quantity" />
      <Column
        headerStyle={{ width: "5em" }}
        header="actions"
        body={(rowData) => PopupDoc(rowData)}
      />
    </DataTable>
  );
};

export default ProductsTable;
