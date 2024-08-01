import React, { FC, PropsWithChildren } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
