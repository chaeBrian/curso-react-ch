import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { BrowserRouter } from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Main />
        </BrowserRouter>
    )
  }

export default App;