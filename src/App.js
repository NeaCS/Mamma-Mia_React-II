import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrito from './pages/Carrito';
import MyNavBar from './components/MyNavBar';
import HomePizzas from './pages/HomePizzas';
import PizzaDetalle from './pages/PizzaDetalle';
import lasPizzas from "./dataBase/pizzas.json";
import { useEffect, useState } from 'react';
import { MyContext } from './context/MyContext';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function App() {
const [pizzas, setPizzas] = useState([]);
const [pizzaSeleccionada, setpizzaSeleccionada] = useState([])
const [totalDePizzas, setTotalDePizzas] = useState([])
const [totalDinero, setTotalDinero] = useState(0)

useEffect(() => {
  setPizzas(lasPizzas)
}, [lasPizzas])


  return (
    <div className="App">
      <MyContext.Provider value={{pizzas, setPizzas, pizzaSeleccionada, setpizzaSeleccionada, totalDePizzas, setTotalDePizzas, totalDinero, setTotalDinero}}>
     <BrowserRouter>
     <MyNavBar/>
      <Routes>
        <Route path="/" element={<HomePizzas/>}/>
        <Route path="/:id" element={<PizzaDetalle/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
     </BrowserRouter>

     </MyContext.Provider>
     <ToastContainer />
    </div>
  );
}

export default App;
