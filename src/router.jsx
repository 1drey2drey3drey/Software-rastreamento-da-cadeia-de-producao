import { Routes, Route } from "react-router-dom";
import { RastrearBasqueta1 } from "./pages/RastrearBasqueta1";
import CadastroProdutor from "./CadastroProdutor";
import { Mapa1 } from "./pages/Mapa1";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<CadastroProdutor />} />
      <Route path="/mapa1" element={<Mapa1 />} />
      <Route path="/rastrearbasqueta1" element={<RastrearBasqueta1 />} />
    </Routes>
  );
}
