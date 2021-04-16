import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

import { useRoute } from "../providers/RouteContext";
import { useCart } from "../providers/CartContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const { setRoute } = useRoute();
  const { state } = useCart();
  return (
    <>
      <header className="home-header">
        <div className="header-top">
          <Link
            to="/"
            className="header-top-left-element link"
            // onClick={() => setRoute("home")}
          >
            <img
              src="./images/company-logo.png"
              alt="img"
              className="header-logo-img"
            />
          </Link>
          <div className="header-list-div">
            <div className="header-list">
              <div className="header-list-item">About</div>
              <Link
                to="/menus"
                className="header-list-item link-header"
                // onClick={() => setRoute("MENU")}
              >
                Menu
              </Link>
              <div className="header-list-item">Order</div>
              <div className="header-list-item">Contact</div>
            </div>
          </div>

          <div className="header-top-right-element">
            <Link
              to="/cart"
              className="cart link-header"
              // onClick={() => setRoute("CART")}
            >
              cart <FaShoppingCart />{" "}
              {state.cartListItem.length === 0 ? (
                <div></div>
              ) : (
                <div className="cart-quantity">{state.cartListItem.length}</div>
              )}
            </Link>
            <Link
              to="/wishlist"
              className="wishlist link-header"
              // onClick={() => setRoute("WISHLIST")}
            >
              wishlist <AiOutlineHeart />
              {state.wishlistListItem.length === 0 ? (
                <div></div>
              ) : (
                <div className="wishlist-quantity">
                  {state.wishlistListItem.length}
                </div>
              )}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
