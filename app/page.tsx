"use client";
import AddProductButton from "@/components/AddProductButton";
import ProductsTable from "@/components/ProductsTable";
export default function Home() {
  return (
    <main>
      <div className=" flex flex-row justify-end my-5 mx-5">
        <AddProductButton />
      </div>

      <div className=" mx-5">
        <ProductsTable />
      </div>
    </main>
  );
}
