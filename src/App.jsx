import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Registration from "./views/Registration";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<Registration />} />
    </Routes>
  );
};


export default App;