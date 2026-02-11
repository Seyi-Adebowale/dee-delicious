// src/context/ProfileContext.js
import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("profile"); // default tab

  const openProfile = (tab = "profile") => {
    setActiveTab(tab);
    setIsProfileOpen(true);
  };

  const closeProfile = () => setIsProfileOpen(false);

  return (
    <ProfileContext.Provider
      value={{ isProfileOpen, activeTab, openProfile, closeProfile, setActiveTab }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
