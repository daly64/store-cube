"use client";
import Dialogs from "@/components/Dialogs";
import ProductsTable from "@/components/ProductsTable";
import useStore from "@/tools/client/zustand/producctStore";
import { Button } from "primereact/button";
export default function Home() {
  const { toggleAddProductDialog } = useStore();

  return (
    <main>
      <Dialogs />
      <div className=" flex flex-row justify-end my-5 mx-5">
        <Button
          label="Add new product"
          icon="pi pi-plus"
          onClick={toggleAddProductDialog}
        />
      </div>

      <div className=" mx-5">
        <ProductsTable />
      </div>
    </main>
  );
}
