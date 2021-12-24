import { useSelector } from "react-redux";
import LoginHero from "../components/LoginHero/LoginHero";
import Modal from "../components/Modal/Modal";
import NavBarHome from "../components/NavBarHome/NavBarHome";

const Home = () => {
  const { show } = useSelector(state => state.home.homeModal);
  const { component } = useSelector(state => state.home.homeModal);


  return (
    <div className="h-screen overflow-x-hidden overflow-y-hidden bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500">
      <NavBarHome />
      <LoginHero />
      {show && <Modal component={component} />}
    </div>
  );
}


export default Home;