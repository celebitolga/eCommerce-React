import { useState, createContext, useEffect, useContext } from "react";

// api
import { fetchMe } from "../api";

// create Context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const me = await fetchMe();
        
        setLoggedIn(true);
        setUser(me);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data);

    localStorage.setItem("current-user", JSON.stringify(data));
  };

  const logout = async () => {
    setLoggedIn(false);
    setUser(null);

    localStorage.removeItem("current-user");
  }

  const values = {
    loggedIn,
    user,
    login,
    logout,
  };

  if (loading) {
    return "Loading..."
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
