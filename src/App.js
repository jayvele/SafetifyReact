import "./App.css";
import OptionContainer from "./components/OptionContainer";
import { Route, Routes } from "react-router-dom";
import PersonalInfo from "./pages/PersonalInfo";
import bgImage from "./components/assets/img/bg1.jpg";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
        // backgroundImage: bgImage,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<OptionContainer />}></Route>

        <Route path="/personalInfo" element={<PersonalInfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
