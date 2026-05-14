import {Header} from "./components/Header";
import {Nav} from "./components/Nav";
//import {Proyectos} from "./components/Proyectos";
import {Footer} from "./components/Footer";
import { ListaProyectos } from "./components/listaproyectos";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <ListaProyectos />
      <Footer />
    </> 
  );
}

export default App; 