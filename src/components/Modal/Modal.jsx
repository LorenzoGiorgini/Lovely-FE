import { useDispatch } from "react-redux";
import { setShow } from "../../redux/actions/actions";
import "./modal.scss";

const Modal = ({ component }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="flex justify-center md:bg-transparent font-sans text-white font-bold items-center overflow-x-hidden overflow-y-auto fixed inset-0 bg-blend-overlay"
      onClick={() => dispatch(setShow(false))}
    >
      <div
        className={`w-full h-full bg-neutral-900 md:w-96 md:h-96 z-40 drop-shadow-2xl md:rounded-lg overflow-hidden scale-up-center p-3 border-4 border-x-pink-600 border-y-purple-600`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <img
            src="/assets/svgs/close-btn.svg"
            alt="close-btn"
            className="w-8 h-8 cursor-pointer spinning-logo"
            onClick={() => dispatch(setShow(false))}
          />
        </div>
        <div className="w-full h-full md:h-fit flex justify-center">
          {component}
        </div>
      </div>
    </div>
  );
};



export default Modal;