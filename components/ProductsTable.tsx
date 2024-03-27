import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useAllProducts } from "@/tools/client/hooks/ProductHooks";
import PopupDoc from "./PopupDoc";

const ProductsTable = () => {
  const { productsLoading, productsError, products } = useAllProducts();

  if (productsLoading) return <p>Loading...</p>;

  if (productsError) return <p>Error : {productsError?.message}</p>;

  return (
    <DataTable value={products} size="small" selectionMode="single">
      <Column field="name" header="name" />
      <Column field="price" header="price" />
      <Column field="quantity" header="quantity" />
      <Column headerStyle={{ width: "5em" }} header="actions" body={PopupDoc} />
    </DataTable>
  );
};

export default ProductsTable;