"use client";
import Dialogs from "@/components/Dialogs";
import ProductsTable from "@/components/ProductsTable";
import useStore from "@/tools/client/zustand/producctStore";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { useEffect } from "react";
export default function Home() {
  const { toggleAddProductDialog } = useStore();
const router = useRouter();
useEffect(()=>{
  router.push("/Dashboard");
})
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

      <div className=" m-auto w-3/4">
        <ProductsTable />
      </div>
      
    </main>
  );
}
