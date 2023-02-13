import SearchBar from "@/app/components/atoms/searchBar/searchBar";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
const page = () => {
  return (
    <div className="py-5 md:py-0 bg-[#4376FF]">
      <div className="w-full fixed bg-primary/90 z-[60] border-b border-white/[0.08] -mt-5 -mx-3 sm:-mx-8 mb-6 dark:bg-darkmode-800/90 md:hidden before:content-[''] before:w-full before:h-screen before:z-10 before:fixed before:inset-x-0 before:bg-black/90 before:transition-opacity before:duration-200 before:ease-in-out before:invisible before:opacity-0">
        <div className="h-[70px] px-3 sm:px-8 flex items-center">
          <a className="flex mr-auto">
            <Image src="/LetsGo.png" alt="LetsGo" width="100" height="100" className="w-6"/>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="stroke-1.5 w-8 h-8 text-white transform -rotate-90">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
          </a>
        </div>
        <div className="h-screen z-20 top-0 left-0 w-[270px] -ml-[100%] bg-primary transition-all duration-300 ease-in-out dark:bg-darkmode-800 [&[data-simplebar]]:fixed [&_.simplebar-scrollbar]:before:bg-black/50">
          <div className="simplebar-wrapper m-0">
            <div className="simplebar-mask">
              <div className="simplebar-offset right-0 bottom-0">
                <div className="simplebar-content-wrapper p-0">
                  <a className="fixed top-0 right-0 mt-4 mr-4 transition-opacity duration-200 ease-in-out visible opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="stroke-1.5 w-8 h-8 text-white transform -rotate-90">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </a>
                  <ul className="py-2">
                    <li>
                      <a href="#" className="h-[50px] flex items-center text-white px-6">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                               className="stroke-1.5">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>
                        </div>
                        <div className="flex items-center w-full ml-3">
                          {"Tableau de bord"}
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="" className="h-[50px] flex items-center text-white px-6">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="stroke-1.5">
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                      </div>
                      <div className="flex items-center w-full ml-3">{"Categories"}</div>
                    </a>
                    </li>
                    <li>
                      <a href="" className="h-[50px] flex items-center text-white px-6">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="stroke-1.5">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                      </div>
                      <div className="flex items-center w-full ml-3">{"Réservations"}</div>
                    </a>
                    </li>
                    <li>
                      <a href="#" className="h-[50px] flex items-center text-white px-6">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="stroke-1.5">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div className="flex items-center w-full ml-3">
                        {"Utilisateurs"}
                        <div
                          className="transition ease-in duration-100 ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="stroke-1.5 w-5 h-5">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        </div>
                      </div>
                    </a>
                    </li>
                    <li>
                      <a href="#" className="h-[50px] flex items-center text-white px-6">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="stroke-1.5">
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                      </div>
                      <div className="flex items-center w-full ml-3">
                        {"Activités"}
                        <div
                          className="transition ease-in duration-100 ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="stroke-1.5 w-5 h-5">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        </div>
                      </div>
                    </a>
                    </li>
                    <li>
                      <a href="" className="h-[50px] flex items-center text-white px-6">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="stroke-1.5">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <div className="flex items-center w-full ml-3">{"Chat"}</div>
                    </a>
                    </li>
                    <li>
                      <a href="" className="h-[50px] flex items-center text-white px-6">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="stroke-1.5">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                      </div>
                      <div className="flex items-center w-full ml-3">{"Calendar"}</div>
                    </a>
                    </li>
                    <li className="w-full h-px bg-white/[0.08] relative my-6"></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="simplebar-placeholder w-0 h-0"></div>
          </div>
          <div className="simplebar-track simplebar-horizontal invisible">
            <div className="simplebar-scrollbar w-0 hidden " ></div>
          </div>
          <div className="simplebar-track simplebar-vertical invisible">
            <div className="simplebar-scrollbar h-0 hidden"></div>
          </div>
        </div>
      </div>
      <div className=" h-[70px] md:h-[65px] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700 before:content-[''] before:absolute before:h-[65px] before:inset-0 before:top-0 before:mx-7 before:bg-[#4376FF] before:mt-3 before:rounded-xl before:hidden before:md:block before:dark:bg-darkmode-600/30 after:content-[''] after:absolute after:inset-0 after:h-[65px] after:mx-3 after:bg-[#4376FF4D] after:mt-5 after:rounded-xl after:shadow-md after:hidden after:md:block after:dark:bg-darkmode-600">
        <div className="flex items-center h-full">
          <a href="#" className="router-link-active router-link-exact-active -intro-x hidden md:flex xl:w-[180px]">
            <Image className="w-6" src="/LetsGo.png"  alt="LetsGo" width="100" height="100"/>
            <span className="ml-3 text-lg text-white hidden xl:block font-[500]"> {"LETSGO"} </span>
          </a>
          <nav className="flex h-[45px] md:ml-10 md:border-l border-white/[0.08] dark:border-white/[0.08] mr-auto -intro-x md:pl-6">
            <ol className="flex items-center text-primary dark:text-slate-300 text-white/90"></ol>
          </nav>
          <div className="relative mr-3 intro-x sm:mr-6">
            <div className="relative z-10 hidden sm:block">
                <SearchBar  />
            </div>
          </div>
          <div className="relative mr-4 intro-x sm:mr-6" data-headlessui-state="">
            <div
                className="cursor-pointer relative text-white/70 outline-none block before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:top-[-2px] before:right-0 before:bg-danger"
                id="headlessui-popover-button-1" aria-expanded="false" data-headlessui-state="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="stroke-1.5 w-5 h-5 dark:text-slate-500">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            </div>
          <div className="relative">
            <div className="cursor-pointer block w-8 h-8 overflow-hidden rounded-full shadow-lg image-fit zoom-in intro-x"  id="headlessui-menu-button-3" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
              <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
