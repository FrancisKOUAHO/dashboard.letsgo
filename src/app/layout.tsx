import React from "react";
import './styles/_main.scss'
import AuthContextProvider from "./context/AuthContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
    <head/>
    <body>
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
    </body>
    </html>
  )
}
