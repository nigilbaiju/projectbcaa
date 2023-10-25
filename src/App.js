import { BrowserRouter, Route, Routes } from "react-router-dom";
 import Home from "./components/Home/Home";
 import Login from "./components/Login/Login";
import Product from "./components/Product/Product";
import Course from "./components/Course/Course";

function App() {
  return (
    <div >
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/course" element={<Course/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
