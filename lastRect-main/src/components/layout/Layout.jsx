import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx";

export default function Layout() {
  return (
    <>
      <Navbar></Navbar>

     <div className="container pt-55">
     <Outlet></Outlet>
     </div>
    </>
  );
}
