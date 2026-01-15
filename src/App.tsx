// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Router from "./components/Router";

const App = () => {
  return (
    // TODO: 
    // 1. Envolver con CartProvider
    // 2. Configurar BrowserRouter y Routes
    // 3. Añadir Navbar
    <>
        <Router />
    </>
  );
}

export default App;