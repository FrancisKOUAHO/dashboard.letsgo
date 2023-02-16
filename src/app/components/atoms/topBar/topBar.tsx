import Image from "next/image";
import {AiOutlineSearch, AiOutlineUser, AiOutlineBell} from "react-icons/ai";
import Input from "@/app/components/atoms/input/input";
import {ButtonIcon} from "@/app/components/atoms/button/button";
import Dropdown from "@/app/components/atoms/dropdown/dropdown";

const TopBar = () => {

  return (
    <nav className="c-topbar">
      <div className="c-below-topbar">
      </div>
      <div className="c-above-topbar">
        <div className="c-above-topbar-left">
          <a href="#">
            <Image src="/LetsGo_white.png" alt="LetsGo Logo" width="35" height="100"/>
            <span>Let&apos;s Go</span>
          </a>
        </div>
        <div className="c-above-topbar-right">
          <Input className="c-input c-input-rounded" type={'text'} placeholder={'Rechercher...'}/>
          <div className="c-notification">
            <AiOutlineBell />
          </div>
          <div className="c-profile-avatar">
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
    </nav>
  )
}

export default TopBar
