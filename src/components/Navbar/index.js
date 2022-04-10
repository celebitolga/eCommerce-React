import { useState, useEffect } from "react";

import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import "./index.scss";

// Components
import MobileNavbar from "./MobileNavbar";
import MiniBasket from "./MiniBasket";

// context
import { useAuth } from "../../context/AuthContext";
import { useBasket } from "../../context/BasketContext";

// urls
import urls from "../../urls";

function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { loggedIn, logout, user } = useAuth();
  const { items, miniBasketShow, setMiniBasketShow } = useBasket();

  const [mobileNavbarActive, setMobileNavbarActive] = useState(false);

  const handleLogoutClick = (e) => {
    e.preventDefault();

    logout();

    navigate(urls.homeUrls.BASE);
  };

  const handleMobileShowButton = (isOverlayClick) => {
    setMiniBasketShow(false);

    if (isOverlayClick) {
      setMobileNavbarActive(false);
      return;
    }
    setMobileNavbarActive(!mobileNavbarActive);
  };

  const handleMiniBasketShowButton = (isOverlayClick) => {
    setMobileNavbarActive(false);

    if (isOverlayClick) {
      setMiniBasketShow(false);
      return;
    }

    setMiniBasketShow(!miniBasketShow);
  };

  const keyPressEvent = (e) => {
    if (e.key === "Escape") {
      setMobileNavbarActive(false);
      setMiniBasketShow(false);
    }
  };

  useEffect(() => {
    if (mobileNavbarActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [mobileNavbarActive]);

  useEffect(() => {
    setMobileNavbarActive(false);
    setMiniBasketShow(false);
  }, [pathname]);

  useEffect(() => {
    // Mobile viewport bug fix
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;

      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    // End of mobile viewport bug fix
    
    window.addEventListener("keydown", keyPressEvent, false);
    
    return () => {
      window.removeEventListener("keydown", keyPressEvent, false);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <button
            onClick={() => handleMobileShowButton(false)}
            className="navbar__hamburger"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <MobileNavbar
            isActive={mobileNavbarActive}
            handleMobileShowButton={handleMobileShowButton}
          />

          <div className="navbar__item -left">
            <NavLink
              to={urls.homeUrls.BASE}
              className={({ isActive }) => (isActive ? "-active" : "")}
              end
            >
              <img
                src={logo}
                alt="eCommerce"
                title="eCommerce"
                className="logo"
              />
            </NavLink>

            <ul className="navbar__item-categories">
              <li>
                <NavLink
                  to={urls.productUrls.BASE}
                  className={({ isActive }) => (isActive ? "-active" : "")}
                  end
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="navbar__item -right">
            <div className="-desktop">
              {loggedIn ? (
                <>
                  {user?.user === "admin" && (
                    <NavLink
                      to={urls.adminUrls.BASE}
                      className={({ isActive }) => (isActive ? "link -active" : "link")}
                    >
                      Admin
                    </NavLink>
                  )}

                  <NavLink to={urls.userUrls.PROFILE} className={({ isActive }) => (isActive ? "link -active" : "link")}>
                    Profile
                  </NavLink>

                  <Link to="#" onClick={handleLogoutClick} className="link">
                    Log Out
                  </Link>
                </>
              ) : (
                <>
                  <Link to={urls.userUrls.COMBINE} className="link">
                    Login
                  </Link>
                </>
              )}
            </div>

            <div className="basket">
              {
                <button
                  className={`basket-button link ${miniBasketShow ? '-active' : ''}`}
                  onClick={() => handleMiniBasketShowButton(false)}
                >
                  Cart ({items.length})
                </button>
              }

              <MiniBasket
                handleMiniBasketShowButton={handleMiniBasketShowButton}
              />
            </div>
            <div
              className={`mini-basket__overlay ${miniBasketShow && "-active"}`}
              onClick={() => handleMiniBasketShowButton(true)}
            ></div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
