import TopBar from "src/components/atoms/topbar/topBar";
import Sidebar from "src/components/atoms/sidebar/sidebar";
import {FunctionComponent} from "react";
import LayoutCustomProps from "app/types/LayoutCustomProps";

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
