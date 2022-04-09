import "./index.scss";

import { useNavigate, NavLink, Outlet } from "react-router-dom";

// context
import { useAuth } from "../../context/AuthContext";

// urls
import urls from "../../urls";

function Profile() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    logout();

    navigate(urls.homeUrls.BASE);
  };

  return (
    <div className="profile">
      <div className="profile__wrapper">
        <nav className="profile__menu">
          <ul>
            <li>
              <NavLink
                to={urls.userUrls.PROFILE}
                className={({ isActive }) => (`link ${isActive ? "-active" : ""}`)}
                end
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={urls.userUrls.ORDERS}
                className={({ isActive }) => (`link ${isActive ? "-active" : ""}`)}
              >
                My Orders
              </NavLink>
            </li>
            <li>
              <button onClick={handleLogout} className="link">
                Log Out
              </button>
            </li>
          </ul>
        </nav>

        <div className="profile__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Profile;
