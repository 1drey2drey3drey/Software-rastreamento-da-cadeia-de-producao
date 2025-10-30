import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./config/AuthContext";
import { AuthContext } from "./config/AuthContext";
import MapaAnonimo from "./pages/MapaAnonimo";
import EscolhaConta from "./pages/EscolhaConta";
import CadastroProdutor from "./pages/CadastroProdutor";
import CadastroExtrator from "./pages/CadastroExtrator";
import MapaProdutor from "./pages/MapaProdutor";
import MapaExtrator from "./pages/MapaExtrator";
import RastrearBasquetaP from "./pages/RastrearBasquetaP";
import RastrearBasquetaE from "./pages/RastrearBasquetaE";
import AddBasquetaE from "./pages/AddBasquetaE";
import AddBasquetaP from "./pages/AddBasquetaP";
import SuaContaP from "./pages/SuaContaP";
import SuaContaE from "./pages/SuaContaE";
import Login from "./pages/Login";


export function Router() {
  return (

     <AuthProvider>

      <Routes>
      <Route path="/" element={<MapaAnonimo />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/escolhaconta" element={<EscolhaConta />} />
      <Route path="/cadastroextrator" element={<CadastroExtrator />} />
      <Route path="/cadastroprodutor" element={<CadastroProdutor />} />
      <Route path="/mapaprodutor" element={<MapaProdutor />} />
      <Route path="/mapaextrator" element={<MapaExtrator />} />
      <Route path="/rastrearbasquetap" element={<RastrearBasquetaP />} />
      <Route path="/rastrearbasquetae" element={<RastrearBasquetaE />} />
      <Route path="/adicionarbasquetae" element={<AddBasquetaE />} />
      <Route path="/adicionarbasquetap" element={<AddBasquetaP />} />
      <Route path="/suacontaprodutor" element={<SuaContaP />}/>
      <Route path="/suacontaextrator" element={<SuaContaE/>}/>
      </Routes>


     </AuthProvider>

  );
}
