import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setModalComponent } from "../../redux/actions/actions";
import SignUp from "./SignUp";
import LoginHeroBtn from "../LoginHeroBtn/LoginHeroBtn";
import Input from "../Input/Input";

const LogIn = () => {
  const dispatch = useDispatch();

  const schema = yup
    .object({
      Email: yup.string().email().required(),
      Password: yup.string().min(8).max(16).required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const googleLogin = () => {
    window.location.href = process.env.REACT_APP_GOOGLE_CALLBACK;
  };

  return (
    <div className="flex flex-col justify-center items-center font-sans">
      <h1 className="flex justify-center text-purple-500 text-3xl mb-2">
        Log In
      </h1>
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="email"
            placeholder="Email"
            {...register("Email")}
            errors={errors.Email?.message}
          />
          <Input
            id="password"
            placeholder="Password"
            {...register("Password")}
            errors={errors.Password?.message}
          />
          <LoginHeroBtn
            title={"Log In"}
            width={"w-full"}
            height={"h-9"}
            gradient={"bg-gradient-to-l from-pink-500 to-purple-500"}
            type={"submit"}
            callback={true}
          />
        </form>
        <div>
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