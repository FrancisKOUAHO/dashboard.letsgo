'use client'

import Input from "@/components/atoms/input/input";
import {Button} from "@/components/atoms/button/button";
import {useAuth} from "@/context/AuthContext";
import React from "react";
import {toast, ToastContainer} from "react-toastify";


export default function Home() {
  const {login, message} = useAuth();


  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    login(values.email, values.password)
    if (message !== null) {
      toast(`${message}`, {position: toast.POSITION.BOTTOM_CENTER});
    }
  }

  return (
    <form onSubmit={handlerSubmit} className={'c-login'}>
      <nav className='c-login-navbar'>
        <img className="mt-5 ml-5" src="/LetsGo_white.png" width={50} height={50} alt="Logo"/>
      </nav>
      <div className={'c-login-left'}>
        <img src="/image/illustration.png" alt="illustration"/>
        <h2>Quelques clics de plus pour vous connecter à votre compte.</h2>
      </div>
      <div className={'c-login-right'}>
        <h1>Connectez-vous</h1>
        <Input className="c-input mb-5" type="email" name="email" placeholder="Email"/>
        <Input className="c-input" type="password" name="password" placeholder="Mot de passe"/>
        <a href="#">Mot de passe oublié</a>
        <Button color="primary" type="submit"> Connexion </Button>
        <p>En vous inscrivant, vous acceptez notre <a href="#">Conditions d&apos;utilisation</a> & <a href="#">Politique
          de confidentialité</a></p>
      </div>
      <ToastContainer/>
    </form>
  )
}
