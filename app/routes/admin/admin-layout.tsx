import { Outlet, redirect } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { MobileSideBar, NavItems } from "../../../components";
import { account } from "~/appwrite/client";
import { getExistingUser, storeUserData } from "~/appwrite/auth";

export async function clientLoader() {
  try {
    const user = await account.get();

    if (!user.$id) return redirect("/sign-in");

    const existingUser = await getExistingUser();
    if (existingUser?.status === "user") {
      // return redirect("/");
    }
    return existingUser?.id ? existingUser : await storeUserData();
  } catch (e) {
    console.log("Error in client Loader", e);
    return redirect("/sign-in");
  }
}

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
        </SidebarComponent>
      </aside>
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
