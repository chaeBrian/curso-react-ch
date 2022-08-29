import Header from "./Components/Header/Header";
import ItemCount from "./Components/ItemCount/ItemCount"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

const App = () => {
    const onAdd = () => {
        console.log('* Agregado al carrito');
    }
    return (
        <>
            <Header />
            <ItemListContainer saludo='Bienvenido'/>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </>
    )
  }

export default App;