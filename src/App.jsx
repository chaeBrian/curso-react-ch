import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import CartProvider from "./Context/CartContext"

import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </CartProvider>
    )
  }

export default App;