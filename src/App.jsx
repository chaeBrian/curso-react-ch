import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import CartProvider from "./Context/CartContext"
import { BrowserRouter } from "react-router-dom";

const App = () => {

    return (
        <CartProvider>
            <BrowserRouter>
                <Header />
                <Main />
            </BrowserRouter>
        </CartProvider>
    )
  }

export default App;