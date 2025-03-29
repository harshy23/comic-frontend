import Navbar from "../Components list/UI/Navbar";

import Footer from "../Components list/UI/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom";


const Mainlayout=(prop)=>{
//    console.log(prop.numcartitem)
    return(
        <>
    
        <Navbar numcartitem={prop.numcartitem}/>
        <ToastContainer />

        <Outlet/>
        <Footer/>
        </>
    )
}

export default Mainlayout