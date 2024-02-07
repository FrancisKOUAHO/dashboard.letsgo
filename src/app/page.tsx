"use client";

import Input from "@/src/components/atoms/input/input";
import { Button } from "@/src/components/atoms/button/button";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import { useAuth } from "@/src/context/AuthContext";

const Home = () => {
  const { login, message } = useAuth();

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    login(values.email, values.password);
    if (message !== null) {
      toast(`${message}`, { position: toast.POSITION.BOTTOM_CENTER });
    }
  };

  return (
    <form onSubmit={handlerSubmit} className={"c-login"}>
      <nav className="c-login-navbar">
        <img
          className="mt-5 ml-5"
          src="/LetsGo_white.png"
          width={50}
          height={50}
          alt="Logo"
        />
      </nav>
      <div className={"c-login-left"}>
        <img src="/image/illustration.png" alt="illustration" />
        <h2>Quelques clics de plus pour vous connecter à votre compte.</h2>
      </div>
      <div className={"c-login-right"}>
        <h1>Connectez-vous</h1>
        <Input
          className="c-input mb-5"
          type="email"
          name="email"
          placeholder="Email"
        />
        <Input
          className="c-input"
          type="password"
          name="password"
          placeholder="Mot de passe"
        />
        <Link href={"/forget-password"}>Mot de passe oublié</Link>
        <Button color="primary" type="submit">
          {" "}
          Connexion{" "}
        </Button>
        <p>
          En vous inscrivant, vous acceptez notre{" "}
          <Link href="#">Conditions d&apos;utilisation</Link> &{" "}
          <Link href="#">Politique de confidentialité</Link>
        </p>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Home;
