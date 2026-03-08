"use client";
import { createContext,useState } from "react";

export const ProfileContext=createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    age: "",
    bio: ""
  });

  const updateProfile = (newData) => {
    setProfile((prev) => ({ ...prev, ...newData }));
  };

  return (
    <ProfileContext.Provider 
         value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}