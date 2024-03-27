import { Toolbar } from "primereact/toolbar";
import React from "react";
;

const ToolBar = () => {
  return (
    <Toolbar
      className="h-16  flex justify-between items-center bg-white text-gray-600 border-b-2 border-gray-300"
      start={
        <div className="flex items-center">
          
          <img src='/logo.svg' className="h-8 mr-4" alt="logo" />
          <h2 className="text-xl font-semibold">Store Cube</h2>
        </div>
      }
    />
  );
};

export default ToolBar;
