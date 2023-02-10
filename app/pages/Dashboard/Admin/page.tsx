import Logo from "../../assets/logostarbuck.png";
import SearchInput from "../../../components/atoms/searchInput/searchInput";
export default function Admin(){
    return (
        <div className="py-5 md:py-0">
            <div className="h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700 before:content-[''] before:absolute before:h-[65px] before:inset-0 before:top-0 before:mx-7 before:bg-primary/30 before:mt-3 before:rounded-xl before:hidden before:md:block before:dark:bg-darkmode-600/30 after:content-[''] after:absolute after:inset-0 after:h-[65px] after:mx-3 after:bg-primary after:mt-5 after:rounded-xl after:shadow-md after:hidden after:md:block after:dark:bg-darkmode-600">
                <div className="flex items-center h-full">
                    <a href="#" className="router-link-active router-link-exact-active -intro-x hidden md:flex xl:w-[180px]">
                        <img className="w-6" src="/LetsGo.svg" />
                        <span className="ml-3 text-lg text-white hidden xl:block"> LETSGO </span>
                    </a>
                    <nav className="flex h-[45px] md:ml-10 md:border-l border-white/[0.08] dark:border-white/[0.08] mr-auto -intro-x md:pl-6">
                        <ol className="flex items-center text-primary dark:text-slate-300 text-white/90"></ol>
                    </nav>
                    <div className="relative mr-3 intro-x sm:mr-6">
                        <div className="relative hidden sm:block">
                           <SearchInput/>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
