import LoginBtn from "../LoginBtn/LoginBtn";
import LoginHeader from "../LoginHeader/LoginHeader";
import { useLocation } from "react-router-dom";

function NavBarHome() {
  const location = useLocation();
  return (
    <div className="w-100 min-w-[350px] bg-transparent h-20">
      <div className="flex items-center justify-between px-10 py-4">
        <LoginHeader title={"Lovey"} />
        {location.pathname === "/" && <LoginBtn title={"Log In"} />}
      </div>
    </div>
  );
}

export default NavBarHome;