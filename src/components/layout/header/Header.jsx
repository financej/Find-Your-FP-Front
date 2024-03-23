import { Link } from "react-router-dom";
import NavigationBar from "./nav/NavigationBar";
import { MetlifeIcon } from "../../ui";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b h-16">
      <div className="flex items-center justify-between px-5 py-2">
        <Link
          to="/"
          aria-label="메인 화면 바로가기"
          className="w-[7rem] md:w-[12rem] h-10"
        >
          <MetlifeIcon />
        </Link>
        <NavigationBar />
      </div>
    </header>
  );
};

export default Header;
