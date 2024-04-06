import { Menubar } from "primereact/menubar";
import { Toolbar } from "primereact/toolbar";
;

const ToolBar = () => {
  return (
    // <Toolbar
    //   className=" flex justify-between items-center bg-white border-b border-gray-300"
    //   style={{ gap: "1rem" }}
    //   start={
    //     <div className="flex items-center">
    //       <img src="/logo.svg" className="h-8 mr-2" alt="logo" />
    //       <h2 className="text-xl font-semibold">Store Cube</h2>

    //     </div>
    //   }
    // />

    <Menubar
      start={
        <div className="flex items-center">
          <img src="/logo.svg" className="h-8 mr-2" alt="logo" />
          <h2 className="text-xl font-semibold">Store Cube</h2>
        </div>
      }
      style={{ gap: "1rem" }}
      model={[
        { label: "Dashboard", icon: "pi pi-fw pi-desktop" },
        { label: "List", icon: "pi pi-fw pi-list" },
        { label: "Inputs", icon: "pi pi-fw pi-sign-in" },
        { label: "Outputs", icon: "pi pi-fw pi-sign-out" },
      ]}
    />
  );
};

export default ToolBar;
