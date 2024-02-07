"use client";

import { ReactNode, useState } from "react";
import "../styles/_main.scss";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthContextProvider from "@/src/context/AuthContext";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 0,
          },
        },
      })
  );

  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <title>letsgo | dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main className="c-layout">
          <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
              <Hydrate>{children}</Hydrate>
              <ToastContainer />
              <ReactQueryDevtools />
            </QueryClientProvider>
          </AuthContextProvider>
        </main>
      </body>
    </html>
  );
}
