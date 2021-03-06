import "./App.css";
import { CakeList } from "./pages/cake/CakeList";
import { CookiesList } from "./pages/cookie/CookiesList";
import { CupCakeList } from "./pages/cupcake/CupCakeList";
import { Home } from "./pages/home/Home";
import { BrowniesList } from "./pages/brownie/BrowniesList";
import { ProductPage } from "./pages/product/ProductPage";
import { Cart } from "./pages/cart/Cart";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Menu } from "./pages/menu/Menu";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
// import { Profile } from "./pages/profile/Profile";
import { SignUp } from "./pages/signup/SignUp";
import Interceptor from "./middlewares/interseptor";

export default function App() {
  return (
    <div className="App">
      {" "}
      <Interceptor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cakes" element={<CakeList />} />
        <Route path="/cupcakes" element={<CupCakeList />} />
        <Route path="/brownies" element={<BrowniesList />} />
        <Route path="/cookies" element={<CookiesList />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/menus" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
