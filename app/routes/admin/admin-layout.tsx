import { Outlet } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { MobileSideBar, NavItems } from "../../../components";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <MobileSideBar />
      <aside className="w-full max-w-[270px] hidden lg:block ">
        <SidebarComponent
          width="270px"
          enableGestures={false}
          type="Auto"
          isOpen={true}
          mediaQuery="(min-width: 1024px)" // tailwind lg
          style={{ height: "100vh", position: "relative" }}
        >
          <NavItems />
          <div>The navbar is right here in this place</div>
        </SidebarComponent>
        {/* <div>hwfwfwgfuhwjgwhfwhfwfwfgwyfgywfwffhwfbw</div> */}
      </aside>
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
