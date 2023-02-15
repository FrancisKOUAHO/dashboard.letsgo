import Image from "next/image";
import {AiOutlineSearch, AiOutlineUser} from "react-icons/ai";
import Input from "@/app/components/atoms/input/input";
import {ButtonIcon} from "@/app/components/atoms/button/button";
import Dropdown from "@/app/components/atoms/dropdown/dropdown";

const TopBar = () => {

  return (
    <div className="c-navbar">
      <div>
        <div className="h-[70px] px-3 sm:px-8 flex items-center">
          <a className="flex mr-auto">
            <Image src="/LetsGo.png" alt="LetsGo" width="100" height="100" className="w-6"/>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="stroke-1.5 w-8 h-8 text-white transform -rotate-90">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
          </a>
        </div>
      </div>
      <div className="z-20 md:h-[65px] md:mt-0  md:-mx-0  md:border-b-0 md:fixed md:inset-x-0 md:top-0 md:px-10 md:pt-10
      sm:-mx-8 sm:px-8
      before:absolute  before:inset-0  before:mx-7 before:bg-[#4376FF4D] before:mt-3 before:rounded-xl before:md:block
      after:absolute after:inset-0 after:h-[65px] after:mx-3 after:bg-[#4376FF] after:mt-5 after:rounded-xl  ">
        <div className="flex items-center h-full">
          <a href="#"
             className=" z-10 router-link-active router-link-exact-active -intro-x hidden md:flex xl:w-[180px]">
            <Image className="w-6" src="/LetsGo.png" alt="LetsGo" width="100" height="100"/>
            <span className="ml-3 text-lg text-white hidden xl:block font-[500]"> {"LETSGO"} </span>
          </a>
          <nav
            className="flex h-[45px] md:ml-10 md:border-l border-white/[0.08] dark:border-white/[0.08] mr-auto -intro-x md:pl-6">
            <ol className="flex items-center text-primary dark:text-slate-300 text-white/90"></ol>
          </nav>
          <div className="relative mr-3 intro-x sm:mr-6">
            <div className="relative z-10 hidden sm:block">
              <div className="relative z-100 searchbar">
                <Input className="c-input w-56 h-[2.25rem] rounded-full pr-8 pl-4 border-none focus:w-72 "/>
                <ButtonIcon type="button" className="absolute inset-y-0 right-[8px] flex items-center px-2 bg-white hover:bg-gray-100 inset-y-4">
                  <AiOutlineSearch />
                </ButtonIcon>
              </div>
            </div>
          </div>
          <div className="relative mr-4 intro-x sm:mr-6 z-10" data-headlessui-state="">
            <div
              className="cursor-pointer relative text-white/70 outline-none block before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:top-[-2px] before:right-0 before:bg-danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                   className="stroke-1.5 w-5 h-5 dark:text-slate-500">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
          </div>
          <div className="relative z-10">
            <Dropdown list={[
              {
                label: 'Francis KOUAHO',
                link: '/booking',
                icon: <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>
              },
              {
                label: 'Profil',
                link: '/customer-history',
                icon: <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>
              },
              {
                label: 'Aide',
                link: '/account/profile',
                icon: <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>
              },
              {label: 'Déconnexion', icon: <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>},
            ]}>
              <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
