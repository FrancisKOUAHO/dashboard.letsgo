import Button from './components/atoms/button/button'
import Input from './components/atoms/input/input'
import Illustration from './assets/illustrationLogin1.png'
import React from "react";
import Image from "next/image";

const Home = () => {
  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    console.log(values)
  }

  return (
      <div className="-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-primary sm:bg-[#4376FF] max-[600px]:bg-[#4376FF] xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600 before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400 after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700">
          <div className="container relative z-10 sm:pr-10">
              <div className="block grid-cols-2 gap-4 xl:grid">
                  <div className="flex-col hidden min-h-screen pl-[2.5rem] xl:flex"  style={{
                      backgroundColor : "#4376FF"
                  }}>
                      <a className="flex items-center pt-5 -intro-x">
                          <img alt="Logo" className="w-[60px]" src="/LetsGo.svg" />
                          <span className="ml-3 text-lg text-white"> {"Let'sGo"} </span>
                      </a>
                      <div className="my-auto">
                          <Image src={Illustration} alt="Illustration" className="w-1/2 -mt-16 -intro-x" />
                          <div className="mt-10 text-3xl font-medium leading-tight text-white -intro-x">
                              Quelques clics de plus pour
                              <br />
                              retrouver votre compte.
                          </div>
                      </div>
                  </div>
                  <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
                      <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
                          <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">{"Connectez - vous"}</h2>
                          <div className="mt-2 text-center intro-x text-slate-400 xl:hidden">
                              {" Quelques clics de plus pour vous connecter à votre compte. Gérez tous vos comptes de commerce électronique en un seul endroit "}
                          </div>
                          <form>
                              <div className="mt-8 intro-x space-y-4">
                                  <Input name="email" type="text" placeholder={'Email'}/>
                                  <Input name="password" type="password" placeholder={'Mot de passe'}/>
                              </div>
                              <div className="mt-4 text-right">
                                  <a href="src/app#">{"Mot de passe oublié ?"}</a>
                              </div>
                              <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
                                  <Button type="submit" color={'primary'}> Connexion </Button>
                              </div>
                          </form>
                          <div className="mt-10 text-center intro-x xl:mt-24 text-slate-600 dark:text-slate-500 xl:text-left">
                              {" En vous inscrivant, vous acceptez notre "}
                              <a className="text-primary dark:text-slate-200">
                                  {"&"}
                              </a>
                              <a className="text-primary dark:text-slate-200"> {"Politique de confidentialité "} </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Home
