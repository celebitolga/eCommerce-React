import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Combine from "./pages/Auth/Combine";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Basket from "./pages/Basket";
import Error404 from "./pages/Error404";

import Profile from "./pages/Profile";
import ProfileHome from "./pages/Profile/Home";
import ProfileOrders from "./pages/Profile/Orders";
import ProfileOrderDetail from "./pages/Profile/OrderDetail";

import Admin from "./pages/Admin";
import AdminHome from "./pages/Admin/Home";
import AdminOrders from "./pages/Admin/Orders";
import AdminProducts from "./pages/Admin/Products";
import AdminProductEdit from "./pages/Admin/ProductEdit";
import AdminProductNew from "./pages/Admin/ProductNew";

import ProtectedRoute from "./pages/ProtectedRoute";

// urls
import urls from "./urls";

function routes() {
  return (
    <Routes>

      {/* Main */}
      <Route path={urls.homeUrls.BASE} element={<Home />} />

      {/* Products */}
      <Route path={urls.productUrls.BASE} element={<Products />} />
      <Route path={urls.productUrls.DETAILS} element={<ProductDetail />} />

      {/* Login/Register */}
      <Route path={urls.userUrls.COMBINE} element={<Combine />} />
      <Route path={urls.userUrls.SIGNIN} element={<Signin />} />
      <Route path={urls.userUrls.SIGNUP} element={<Signup />} />

      {/* Basket */}
      <Route path={urls.basketUrls.BASE} element={<Basket />} />

      {/* Profile */}
      <Route
        path={urls.userUrls.PROFILE}
        element={
          <ProtectedRoute redirectPath={urls.userUrls.COMBINE}>
            <Profile />
          </ProtectedRoute>
        }
      >
        <Route index element={<ProfileHome />} />
        <Route path={urls.userUrls.ORDERS} element={<ProfileOrders />} />
        <Route path={urls.userUrls.ORDER_DETAIL} element={<ProfileOrderDetail />} />
      </Route>

      {/* Admin */}
      <Route
        path={urls.adminUrls.BASE}
        element={
          <ProtectedRoute redirectPath={urls.homeUrls.BASE} admin={true}>
            <Admin />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminHome />} />
        <Route path={urls.adminUrls.ORDERS} element={<AdminOrders />} />
        <Route path={urls.adminUrls.PRODUCTS} element={<AdminProducts />} />
        <Route
          path={urls.adminUrls.PRODUCT_EDIT}
          element={<AdminProductEdit />}
        />
        <Route
          path={urls.adminUrls.PRODUCT_NEW}
          element={<AdminProductNew />}
        />
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default routes;
