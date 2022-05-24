import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
