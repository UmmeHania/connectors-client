import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import RequireAuth from "./pages/Login/RequireAuth";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";
import MyOrders from "./pages/Dashboard/MyOrders";
import AddAReview from "./pages/Dashboard/AddAReview";
import MyProfile from "./pages/Dashboard/MyProfile";
import MyPortfolio from "./pages/MyPortfolio/MyPortfolio";
import Purchase from "./pages/Purchase/Purchase";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import RequireAdmin from "./pages/Login/RequireAdmin";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>

        <Route path='/parts/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        } />

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddAReview></AddAReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>

        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
