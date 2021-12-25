import LoginHeroBtn from "../LoginHeroBtn/LoginHeroBtn";

const SignUp = () => {
  return (
    <div className="flex flex-col justify-center items-center font-sans">
      <h1 className="flex justify-center text-purple-500 text-3xl mb-2">
        Create Account
      </h1>
      <div>
          <LoginHeroBtn title={"Google"} />
      </div>
    </div>
  );
};

export default SignUp;
