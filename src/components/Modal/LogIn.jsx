import { useDispatch } from "react-redux";
import { setModalComponent } from "../../redux/actions/actions";
import SignUp from "./SignUp";
import LoginHeroBtn from "../LoginHeroBtn/LoginHeroBtn";
import Input from "../Input/Input";
import Title from "../Title/Title";
import googleLogin from "../../tools/googleLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const LogIn = () => {
  const dispatch = useDispatch();

  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-col justify-center items-center font-sans">
      <Title placeholder="Log In" />
      <div className="w-full h-full p-20 md:p-8">
        <div className="flex flex-col w-full justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input id="email" placeholder="Email" name="email" errors={errors.email?.message} {...register("email")} />
            <Input id="password" placeholder="Password" name="password" errors={errors.password?.message} {...register("password")}/>
            <LoginHeroBtn
              title={"Log In"}
              width={"w-full"}
              height={"h-9"}
              gradient={"bg-gradient-to-l from-pink-500 to-purple-500"}
              type={"submit"}
              callback={onSubmit}
            />
          </form>

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
            Don't have an account?{" "}
            <span
              className="border-b-2 border-pink-500 cursor-pointer"
              onClick={() => dispatch(setModalComponent(<SignUp />))}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};


export default LogIn;