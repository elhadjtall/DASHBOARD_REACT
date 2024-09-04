import React from "react";
import { BsCart3 } from "react-icons/bs";

function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon" /> SHOP
        </div>
        <span className="icon close_icon"></span>
      </div>

      <div className="sidebar-menu">
        <ul>
          <li className="sidebar-list-item">
            <a href="">
              <BsCart3 className="icon dashboard_icon" />
              Dashboard
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsCart3 className="icon orders_icon" />
              Orders
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsCart3 className="icon products_icon" />
              Products
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;