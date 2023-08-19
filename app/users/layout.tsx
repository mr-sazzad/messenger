import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

const usersLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <Sidebar>
      <div className="h-full">
        {/* layout  */}
        {children}
      </div>
    </Sidebar>
  );
};

export default usersLayout;
