import React from "react";
import '../app/styles/_main.scss';
import AuthContextProvider from "./context/AuthContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
    <head/>
    <AuthContextProvider>
      <body>{children}</body>
    </AuthContextProvider>
    </html>
  )
}
