import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Conteudo from "./components/Conteudo";
import reactLogo from "./assets/react.svg"
import { Outlet } from "react-router-dom";

export default function App() {

  let reactLogoAlt = "React Logo";

  // Lista de links sociais

  let listaLinks = [<li>Github</li>,<li>X</li>, <li>Reddit</li>];

  return (
    <>
      <div className="container">

        <Cabecalho/>

        {/* <img src={reactLogo} alt={reactLogoAlt} /> */}

        {/* <Conteudo reactLogoProps={reactLogo} reactLogoAltProps={reactLogoAlt}/> */}
        <Outlet/>

        <Rodape listaProps={listaLinks}/>

      </div>
    </>
  )
}
