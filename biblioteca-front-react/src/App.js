import { Routes, Route , Navigate} from "react-router-dom";
import Principal from './componentes/Principal';
import CrearLibro from './componentes/encabezado/CrearLibro'
import Favoritos from './componentes/encabezado/Favoritos'
import DetalleLibro from './componentes/mostrar libros/DetalleLibro'
import EditarLibro from "./componentes/mostrar libros/EditarLibro";
import 'bootstrap/dist/css/bootstrap.min.css';
import useLocalStorage from "./customHooks/useLocalStorage";
import React, {useState} from "react";
import Error404 from "./componentes/errores/Error404";

function App() {
  const [libros, setLibros] = useState([])
  const [librosFavoritos, setLibrosFavotiros] = useLocalStorage('librosFavKey', [])

  return (
    <Routes>
      <Route path='/' element={<Principal librosFavoritos={librosFavoritos} setLibrosFavotiros={setLibrosFavotiros} libros={libros} setLibros={setLibros}/>} />
      <Route path='/Favoritos' element={<Favoritos librosFavoritos={librosFavoritos} />} />
      <Route path='/DetalleLibro/:id' element={<DetalleLibro />} />
      <Route path='/EditarLibro/:id' element={<EditarLibro />} />
      <Route path='/CrearLibro' element={<CrearLibro />} /> 
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
