import { Header } from "./header";
import { ModalContainer } from "../ui";
import { Outlet } from "react-router-dom";
import { SideBar } from "./sidebar";
import AIFloatingButton from "../chatbot/AIFloatingButton";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex">
        <nav className="basis-2/12">
          <SideBar />
        </nav>
        <main className="flex flex-col w-full gap-6 p-10 mx-auto basis-10/12">
          {children || <Outlet />}
          <ModalContainer />
          <AIFloatingButton />
        </main>
      </main>
    </>
  );
};

export default Layout;
