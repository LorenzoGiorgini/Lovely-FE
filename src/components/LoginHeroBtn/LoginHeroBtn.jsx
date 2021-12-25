import { useDispatch } from "react-redux";
import { setModalComponent, setShow } from "../../redux/actions/actions";
import SignUp from "../Modal/SignUp";

function LoginHeroBtn({ title, width, height, position }) {

  const dispatch = useDispatch();

  const dispatcher = () => {
    dispatch(setShow(true))
    dispatch(setModalComponent(<SignUp />))
  }


  return (
    <button
      type="button"
      className={`rounded-full font-sans font-semibold text-white ${width} ${height} bg-gradient-to-l from-orange-500 to-pink-500 ${position}`}
      onClick={() => dispatcher()}
    >
      {title}
    </button>
  );
}


export default LoginHeroBtn;