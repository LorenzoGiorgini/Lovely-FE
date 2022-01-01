import { useDispatch } from "react-redux";
import LoginHeroBtn from "../LoginHeroBtn/LoginHeroBtn";
import Title from "../Title/Title";
import googleLogin from "../../tools/googleLogin";
import LogIn from "./LogIn";
import { setModalComponent } from "../../redux/actions/actions";

const SignUp = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center items-center font-sans">
      <Title placeholder="Log In" />
      <div className="w-full h-full p-20 md:p-8">
        <div className="flex flex-col w-full justify-center items-center">
          <LoginHeroBtn
            title={"Standard Account"}
            width={"w-full"}
            height={"h-9"}
            gradient={"bg-gradient-to-l from-pink-500 to-purple-500"}
            callback={googleLogin}
          />

          <div className="line-trough">
            <span>or</span>
          </div>
          <LoginHeroBtn
            title={"Google"}
            width={"w-full"}
            height={"h-9"}
            gradient={"bg-gradient-to-l from-orange-500 to-pink-500"}
            callback={googleLogin}
          />

          <p className="cursor-default mt-3">
            Arleady on Lovey ?{" "}
            <span
              className="border-b-2 border-pink-500 cursor-pointer"
              onClick={() => dispatch(setModalComponent(<LogIn />))}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};


export default SignUp;