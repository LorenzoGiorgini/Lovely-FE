import { useDispatch } from "react-redux";
import { setModalComponent } from "../../redux/actions/actions";
import SignUp from "./SignUp";
import LoginHeroBtn from "../LoginHeroBtn/LoginHeroBtn";

const LogIn = () => {
  const dispatch = useDispatch();

  const logInUser = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center items-center font-sans">
      <h1 className="flex justify-center text-purple-500 text-3xl mb-2">
        Get Started
      </h1>
      <div className="w-full">
        <form onSubmit={(e) => logInUser(e)}>
          <div className="flex flex-col w-full rounded-lg mb-4">
            <span className="text-pink-500">Email</span>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full outline-none text-purple-500 bg-transparent"
            />
          </div>
          <div className="flex flex-col w-full rounded-lg mb-4">
            <span className="text-pink-500">Password</span>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full outline-none text-purple-500 bg-transparent"
            />
          </div>
          <button
            type="submit"
            className="shadow-pink-500 w-full h-8 rounded-lg font-bold bg-gradient-to-l from-pink-500 to-purple-500"
          >
            Log In
          </button>
        </form>
        <div>
          <div className="line-trough">
            <span>or</span>
          </div>
          <LoginHeroBtn title={"Google"} width={"w-full"} height={"h-9"} />
        </div>
      </div>

      <p className="cursor-default mt-3">
        Don't have an account?{" "}
        <span
          className="border-b-2 border-pink-500 cursor-pointer"
          onClick={() => dispatch(setModalComponent(<SignUp />))}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default LogIn;
