import React from "react";

import "./styles.scss";

import {
  Outlet,
  NavLink,
} from "react-router-dom";

// urls
import urls from '../../urls';

function Admin() {

  return (
    <div className="admin">
      <div className="admin__wrapper">
        <nav className="admin__menu">
          <ul>
            <li>
              <NavLink
                to={urls.adminUrls.BASE}
                className={({ isActive }) => (`link ${isActive ? "-active" : ""}`)}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={urls.adminUrls.ORDERS}
                className={({ isActive }) => (`link ${isActive ? "-active" : ""}`)}
              >
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to={urls.adminUrls.PRODUCTS}
                className={({ isActive }) => (`link ${isActive ? "-active" : ""}`)}
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="admin__content">
          <Outlet />
        </div>
      </div>


    </div>
  );
}

export default Admin;
