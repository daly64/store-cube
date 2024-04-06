'use client'
import Dialogs from '@/components/Dialogs';
import ProductsTable from '@/components/ProductsTable';
import { toggleAddProductDialog } from '@/tools/client/zustand/productsStatesModifiers';
import { Button } from 'primereact/button';
import React from 'react'

const StorePage = () => {
  return (
    <div>
      <h1>Store</h1>

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
    </div>
  );
}

export default StorePage; 
