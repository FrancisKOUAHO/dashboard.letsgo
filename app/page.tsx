import Image from 'next/image'

import Button from '../app/components/atoms/button/button'
import Input from './components/atoms/input/input'

import Logo from './assets/logostarbuck.png'
import Truc from './assets/illustrationLogin1.svg'

export default function Home() {
  return (
    <main className={'c-login'}>
      <nav className='c-login-navbar'>
        <Image src={Logo} width={50} height={50} alt="Logo" />
      </nav>
      <div className={'c-login-left'}>
        <Truc src={Logo} alt="Illustration" />
        <h2>Quelques clics de plus pour vous connecter à votre compte.</h2>
      </div>
      <div className={'c-login-right'}>
        <h1>Connectez-vous</h1>
        <Input type={'text'} placeholder={'Email'}/>
        <Input type={'password'} placeholder={'Mot de passe'}/>
        <a href="#">Mot de passe oublié</a>
        <Button color={'primary'}> Connexion </Button>
        <p>En vous inscrivant, vous acceptez notre <a href="#">Conditions d&apos;utilisation</a> & <a href="#">Politique de confidentialité</a></p>
      </div>
    </main>
  )
}
