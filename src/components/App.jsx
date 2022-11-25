import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';
function App(){
    return (
        <>
    <Navbar/>
    <ItemListContainer greeting={"Hola buenas tardes"}/>
        </>
       
    );
}

export default App;