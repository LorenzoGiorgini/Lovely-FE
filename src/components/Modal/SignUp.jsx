import LoginHeroBtn from "../LoginHeroBtn/LoginHeroBtn";

const SignUp = () => {
  return (
    <div className="flex flex-col justify-center items-center font-sans">
      <h1 className="flex justify-center text-purple-500 text-3xl mb-2">
        Create Account
      </h1>
      <LoginHeroBtn title={"Google"} width={"w-full"} height={"h-9"} gradient={"bg-gradient-to-l from-orange-500 to-pink-500"}/>
      
    </div>
  );
};

export default SignUp;
