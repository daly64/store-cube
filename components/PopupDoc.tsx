import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { Toast } from "primereact/toast";

export default function PopupDoc() {
  const menuLeft = useRef<Menu>(null);
  const toast = useRef<Toast>(null);
  let items: MenuItem[] = [
    {
      label: "Edit",
      icon: "pi pi-pencil",
      className: "text-green-600",
      command: () =>
        toast.current?.show({ severity: "info", detail: "Edit clicked!" }),
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
      className: "text-red-600",
      command: () =>
        toast.current?.show({ severity: "error", detail: "Delete clicked!" }),
    },
  ];
  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast}/>
      <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
      <Button
        rounded
        text
        icon="pi pi-ellipsis-v"
        onClick={(event) => menuLeft.current?.toggle(event)}
        aria-controls="popup_menu_left"
        aria-haspopup
      />
    </div>
  );
}
