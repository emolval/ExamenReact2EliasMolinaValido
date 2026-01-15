import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Navigate to="/home" replace />} />
                    <Route path="home" element={<Home />}>Home</Route>
                    <Route path="cart" element={<Cart />}>Cart</Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;