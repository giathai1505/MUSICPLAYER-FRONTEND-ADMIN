import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../layout/sidebar/Sidebar";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div>
        <Header />
        <div>
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
