'use client';
import { useRouter } from "next/navigation";
import { Menubar } from "primereact/menubar";
;

const ToolBar = () => {
  const router = useRouter();
  return (
    <Menubar
      start={
        <div className="flex items-center">
          <img src="/logo.svg" className="h-8 mr-2" alt="logo" />
          <h2 className="text-xl font-semibold">Store Cube</h2>
        </div>
      }
      style={{ gap: "1rem" }}
      model={[
        {
          label: "Dashboard",
          icon: "pi pi-fw pi-desktop",
          command: () => router.push("/Dashboard"),
        },
        {
          label: "Store",
          icon: "pi pi-fw pi-box",
          command: () => router.push("/Store"),
        },
        {
          label: "Inputs",
          icon: "pi pi-fw pi-sign-in",
          command: () => router.push("/Inputs"),
        },
        {
          label: "Outputs",
          icon: "pi pi-fw pi-sign-out",
          command: () => router.push("/Outputs"),
        },
      ]}
    />
  );
};

export default ToolBar;
