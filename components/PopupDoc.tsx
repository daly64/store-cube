"use client";
import useDeleteProduct from "@/tools/client/hooks/productHooks/useDeleteProduct";
import Product from "@/tools/client/types/Product";
import useProductStore from "@/tools/client/zustand/producctStore";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { useRef } from "react";

export default function PopupDoc(product: Product) {
  const menuLeft = useRef<Menu>(null);
  const { deleteProduct } = useDeleteProduct();
  const { toggleEditProductDialog, setSelectedProduct } = useProductStore();

  let items: MenuItem[] = [
    {
      label: "Edit",
      icon: "pi pi-pencil",
      className: "text-green-600",
      command: () => {
        setSelectedProduct(product);
        toggleEditProductDialog();
      },
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
      className: "text-red-600",
      command: () => {
        deleteProduct({ variables: { id: product.id } });
      },
    },
  ];
  return (
    <>
      <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />

      <Button
        rounded
        text
        icon="pi pi-ellipsis-h"
        onClick={(event) => menuLeft.current?.toggle(event)}
        aria-controls="popup_menu_left"
        aria-haspopup
      />
    </>
  );
}
