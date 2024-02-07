import { FunctionComponent } from "react";
import LayoutCustomProps from "@/src/types/LayoutCustomProps";
import TopBar from "@/src/components/atoms/topbar/topBar";
import SidebarPartner from "@/src/components/atoms/sidebar/sidebarPartner";

const LayoutCustom: FunctionComponent<LayoutCustomProps> = ({ children }) => {
  return (
    <section className="c-layout-dashboard">
      <SidebarPartner />
      <div className="c-layout-dashboard__container">
        <TopBar />
        {children}
      </div>
    </section>
  );
};

export default LayoutCustom;
