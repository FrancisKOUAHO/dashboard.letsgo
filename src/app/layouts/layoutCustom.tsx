import TopBar from "@/app/components/atoms/topBar/topBar";
import Sidebar from "@/app/components/atoms/sideBar/sidebar";
import {FunctionComponent} from "react";
import LayoutCustomProps from "@/app/types/LayoutCustomProps";

const LayoutCustom: FunctionComponent<LayoutCustomProps> = ({children}) => {
  return (
    <>
      <TopBar/>
      <div className="flex overflow-hidden ml-64 mr-8">
        <Sidebar/>
        <main className="w-full">
          {children}
        </main>
      </div>
    </>
  )
}

export default LayoutCustom
