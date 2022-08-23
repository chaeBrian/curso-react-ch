import Header from "./Components/Header/Header";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

const App = () => {
    return (
        <>
            <Header />
            <ItemListContainer saludo='Bienvenido'/>
        </>
    )
  }

export default App;