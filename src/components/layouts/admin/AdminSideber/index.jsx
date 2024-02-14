import React from "react";
import { NavLink } from "react-router-dom";
import {
  Buyurtmalar,
  Customers,
  Logo,
  Mahsulotlar,
  Manzil,
  Texnologiyalar,
  Toifalar,
} from "../../../../assets/react-icons";

const index = () => {
  return (
    <div className="admin__sidebar">
      <NavLink className="sidebarLink sidebar__logo">
        <Logo />
        <span className="matrassue">Matrassue</span>
      </NavLink>
      <NavLink to="buyurtmalar" className="sidebarLink">
        <Buyurtmalar />
        <span>Buyurtmalar</span>
      </NavLink>
      <NavLink to="customers" className="sidebarLink">
        <Customers />
        <span>Customers</span>
      </NavLink>
      <NavLink to="toifalar" className="sidebarLink">
        <Toifalar />
        <span>Toifalar</span>
      </NavLink>
      <NavLink to="mahsulotlar" className="sidebarLink">
        <Mahsulotlar />
        <span>Mahsulotlar</span>
      </NavLink>
      <NavLink to="texnologiyalar" className="sidebarLink">
        <Texnologiyalar />
        <span>Texnologiyalar</span>
      </NavLink>
      <NavLink to="manzil" className="sidebarLink">
        <Manzil />
        <span>Manzil</span>
      </NavLink>
    </div>
  );
};
export default index;