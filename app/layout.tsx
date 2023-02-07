import React from "react";
import '../app/styles/_main.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
    <head/>
    <body>{children}</body>
    </html>
  )
}
