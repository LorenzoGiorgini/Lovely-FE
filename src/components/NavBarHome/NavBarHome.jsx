import LoginBtn from "../LoginBtn/LoginBtn";
import LoginHeader from "../LoginHeader/LoginHeader";

function NavBarHome() {

  return (
    <div className="w-100 min-w-[350px] bg-transparent h-20">
      <div className="flex items-center justify-between px-10 py-4">
        <LoginHeader title={"Lovey"} />
        <LoginBtn title={"Log In"} />
      </div>
    </div>
  );
}


export default NavBarHome;