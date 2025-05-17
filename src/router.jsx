import { Routes, Route } from "react-router-dom";
import MapaAnonimo from "./pages/MapaAnonimo";
import EscolhaConta from "./pages/EscolhaConta";
import CadastroProdutor from "./pages/CadastroProdutor";
import CadastroExtrator from "./pages/CadastroExtrator";
import MapaProdutor from "./pages/MapaProdutor";
import MapaExtrator from "./pages/MapaExtrator";
import RastrearBasquetaP from "./pages/RastrearBasquetaP";
import RastrearBasquetaE from "./pages/RastrearBasquetaE";
import AddBasquetaE from "./pages/AddBasquetaE";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MapaAnonimo />} />
      <Route path="/escolhaconta" element={<EscolhaConta />} />
      <Route path="/cadastroextrator" element={<CadastroExtrator />} />
      <Route path="/cadastroprodutor" element={<CadastroProdutor />} />
      <Route path="/mapaprodutor" element={<MapaProdutor />} />
      <Route path="/mapaextrator" element={<MapaExtrator />} />
      <Route path="/rastrearbasquetap" element={<RastrearBasquetaP />} />
      <Route path="/rastrearbasquetae" element={<RastrearBasquetaE />} />
      <Route path="/adicionarbasquetae" element={<AddBasquetaE />} />
    </Routes>
  );
}
