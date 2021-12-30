import LoginHeroBtn from "../LoginHeroBtn/LoginHeroBtn";
import Title from "../Title/Title";

const SignUp = () => {
  return (
    <div className="flex flex-col justify-center items-center font-sans">
      <Title placeholder="Create Account" /> 
      <LoginHeroBtn title={"Google"} width={"w-full"} height={"h-9"} gradient={"bg-gradient-to-l from-orange-500 to-pink-500"}/>
      
    </div>
  );
};

export default SignUp;
