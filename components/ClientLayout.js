"use client";
import { useState, createContext } from "react";
import { SessionProvider } from "next-auth/react";
export const ImgSessionContext = createContext(null);

const ClientLayout = ({ session, children }) => {
  const [largeObject, setLargeObject] = useState({ someLargeObject: true });

  return (
    <SessionProvider session={session}>
      <ImgSessionContext.Provider value={largeObject}>
        {children}
      </ImgSessionContext.Provider>
    </SessionProvider>
  );
};

export default ClientLayout;
