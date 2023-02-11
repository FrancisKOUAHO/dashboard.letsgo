import Image from 'next/image'

import Button from '../app/components/atoms/button/button'
import Input from './components/atoms/input/input'

import Logo from './assets/LetsGo.png'
import illustration from './assets/illustrationLogin1.png'
import React from "react";

const Home = () => {
  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    console.log(values)
  }

  return (
    <main className={'c-login'}>
      <nav className='c-login-navbar'>
        <Image src={Logo} width={50} height={50} alt="Logo"/>
      </nav>
      <div className={'c-login-left'}>
        <Image src={illustration} alt="Illustration"/>
        <h2>Quelques clics de plus pour vous connecter à votre compte.</h2>
      </div>
      <form className={'c-login-right'}>
        <h1>Connectez-vous</h1>
        <Input name="email" type="text" placeholder={'Email'}/>
        <Input name="password" type="password" placeholder={'Mot de passe'}/>
        <a href="#">Mot de passe oublié</a>
        <Button type="submit" color={'primary'}> Connexion </Button>
        <p>En vous inscrivant, vous acceptez notre <a href="#">Conditions d&apos;utilisation</a> <a href="#">Politique
          de confidentialité</a></p>
      </form>
    </main>
  )
}

export default Home
