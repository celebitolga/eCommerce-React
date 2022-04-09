import "./index.scss";

import { Link, useNavigate } from "react-router-dom";

import CloseSvg from "../../Svg/close";

// urls
import urls from "../../../urls";

// context
import { useAuth } from "../../../context/AuthContext";

function MobileNavbar({ isActive, handleMobileShowButton }) {
  const navigate = useNavigate();
  const { loggedIn, logout, user } = useAuth();

  const handleLogoutClick = (e) => {
    e.preventDefault();

    logout();

    navigate(urls.homeUrls.BASE);
  };

  return (
    <div className={`mobile-navbar ${isActive && "-active"}`}>
      <div className="mobile-navbar__wrapper">
        <button
          className="mobile-navbar__close"
          onClick={() => handleMobileShowButton(false)}
        >
          <CloseSvg />
        </button>

        <ul className="mobile-navbar-categories">
          <li>
            <Link to={urls.productUrls.BASE}>Products</Link>
          </li>
        </ul>

        <div className="mobile-navbar__bottom">
          {loggedIn ? (
            <>
              {user?.role === "admin" && (
                <Link
                  className="mobile-navbar__bottom-link"
                  to={urls.adminUrls.BASE}
                >
                  Admin
                </Link>
              )}

              <Link
                className="mobile-navbar__bottom-link"
                to={urls.userUrls.PROFILE}
              >
                Profile
              </Link>

              <Link
                to="#"
                className="mobile-navbar__bottom-link"
                onClick={handleLogoutClick}
              >
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link
                className="mobile-navbar__bottom-link"
                to={urls.userUrls.SIGNIN}
              >
                Login
              </Link>
              <Link
                className="mobile-navbar__bottom-link"
                to={urls.userUrls.SIGNUP}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
      <div
        className="mobile-navbar__overlay"
        onClick={() => handleMobileShowButton(true)}
      ></div>
    </div>
  );
}

export default MobileNavbar;
