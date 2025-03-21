import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./asserts/css/style.css"
import Home from "./Home";
import Footer from "./components/partials/Footer";


function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
   </BrowserRouter>
    </>
  );
}

export default App;
