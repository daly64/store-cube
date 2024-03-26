import { Toolbar } from "primereact/toolbar";
import React from "react";

const ToolBar = () => {
  return (
    <Toolbar
      className="h-16  flex justify-between items-center bg-gray-100 text-blue-600 border-b-2 border-gray-300"
      start={
        <div className="flex items-center">
          <img src="favicon.ico" alt="icon" className="h-8 w-8 mr-2" />
          <h2 className="text-xl font-semibold">Store Cube</h2>
        </div>
      }
    />
  );
};

export default ToolBar;
