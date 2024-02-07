import { FunctionComponent } from "react";
import LayoutCustomProps from "@/src/types/LayoutCustomProps";
import TopBar from "@/src/components/atoms/topbar/topBar";
import Sidebar from "@/src/components/atoms/sidebar/sidebar";

const LayoutCustom: FunctionComponent<LayoutCustomProps> = ({ children }) => {
  return (
    <section className="c-layout-dashboard">
      <Sidebar />
      <div className="c-layout-dashboard__container">
        <TopBar />
        {children}
      </div>
    </section>
  );
};

export default LayoutCustom;
