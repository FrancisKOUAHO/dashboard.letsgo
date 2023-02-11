"use client"

import React from "react";
import './styles/_main.scss'
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import AuthContextProvider from "./context/AuthContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
    <head/>
    <body>
    <AuthContextProvider>
      {children}
      <ToastContainer />
    </AuthContextProvider>
    </body>
    </html>
  )
}
