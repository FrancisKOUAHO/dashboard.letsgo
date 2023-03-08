'use client'

import Input from "@/components/atoms/input/input";
import {Button} from "@/components/atoms/button/button";
import React from "react";
import {api} from "@/config/api";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from "next/navigation";

const ForgetPassword = () => {
  const router = useRouter();

  const handleSubmitForgetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { email } = Object.fromEntries(new FormData(form));
    const response = await api.post('/auth/send-mail', {
      email: email
    })
    if (response.status === 200) {
      toast.success('Un email de réinitialisation de mot de passe vous a été envoyé', { position: toast.POSITION.BOTTOM_CENTER })
      await router.push('/')
      form.reset();
    } else {
      toast.error('Nous avons rencontré un problème lors de la réinitialisation de votre mot de passe. Veuillez vérifier votre boîte de réception pour un e-mail de réinitialisation de mot de passe. Si vous n\'avez pas reçu l\'e-mail, veuillez vérifier votre dossier spam ou contactez notre équipe d\'assistance pour obtenir de l\'aide', {position: toast.POSITION.BOTTOM_CENTER})
    }
  };

  return (
    <div
      className="-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-primary sm:bg-[#4376FF] max-[600px]:bg-[#4376FF] xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600 before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400 after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700">
      <div className="container relative z-10 sm:pr-[2.5rem]">
        <div className="block grid-cols-2 gap-4 xl:grid">
          <div className="flex-col hidden min-h-screen xl:flex pl-[2.5rem]" style={{
            backgroundColor: "#4376FF"
          }}>
            <a className="flex items-center pt-5 -intro-x">
              <img alt="Logo" className="w-[60px]" src="/LetsGo_white.png"/>
              <span className="ml-3 text-lg text-white"> {'Let\'sGo'} </span>
            </a>
            <div className="my-auto">
              <img src='/image/illustration.png' alt="illustrationUrl" className="w-1/2 -mt-16 -intro-x"/>
              <div className="mt-10 text-3xl font-medium leading-tight text-white -intro-x">
                Quelques clics de plus pour
                <br/>
                retrouver votre compte.
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmitForgetPassword} className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
            <div
              className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
              <div className="mt-2 intro-x text-slate-400">
                {'Saisissez l\'adresse électronique utilisée lors de votre inscription et nous vous enverrons les instructions pour réinitialiser votre mot de passe.\n'}
              </div>
              <div className="mt-8 intro-x">
                <Input className="c-input" type="email" name="email" placeholder="contact@letsgoeurope.fr"/>
              </div>
              <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left text-center">
                <Button type="submit" color="primary"> Envoyer </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default ForgetPassword


