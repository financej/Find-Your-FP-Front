import { Header } from "./header";
import { ModalContainer } from "../ui";
import { Outlet } from "react-router-dom";
import { SideBar } from "./sidebar";
import AIFloatingButton from "../chatbot/AIFloatingButton";

    const Layout = ({ children }) => {
      return (
        <>
          <header className="fixed top-0 z-50 w-full">
            <Header />
          </header>
          <section className="pt-16">
            <main className="flex">
              {/*<nav className="hidden lg:block lg:basis-2/12">*/}
              {/*  <SideBar />*/}
              {/*</nav>*/}
              <main className="flex flex-col w-full gap-6 mx-auto basis-10/12">
                {children || <Outlet />}
                <ModalContainer />
                {/*<AIFloatingButton />*/}
              </main>
            </main>
          </section>
        </>
      );
    };

export default Layout;
