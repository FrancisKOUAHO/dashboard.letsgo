import TopBar from "@/app/components/atoms/topBar/topBar";
import Sidebar from "@/app/components/atoms/sideBar/sidebar";
import {FunctionComponent} from "react";
import LayoutCustomProps from "@/app/types/LayoutCustomProps";

const LayoutCustom: FunctionComponent<LayoutCustomProps> = ({children}) => {
  return (
    <>
      <TopBar/>
      <div className="flex overflow-hidden">
        <Sidebar/>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

export default LayoutCustom
