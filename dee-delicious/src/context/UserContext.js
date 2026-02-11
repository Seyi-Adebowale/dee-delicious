import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Load user from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (
        parsedUser.expiresAt &&
        new Date(parsedUser.expiresAt).getTime() < Date.now()
      ) {
        setUser(null);
        localStorage.removeItem("user");
      } else {
        setUser(parsedUser);
      }
    }
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  // Central periodic check for token expiry (every 30s)
  useEffect(() => {
    const interval = setInterval(() => {
      if (user?.expiresAt && new Date(user.expiresAt).getTime() < Date.now()) {
        setUser(null);
      }
    }, 30 * 1000);

    return () => clearInterval(interval);
  }, [user]);

  
  const openLoginModal = () => setShowAuthModal(true);

  const closeLoginModal = () => setShowAuthModal(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        showAuthModal,
        openLoginModal,
        closeLoginModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
