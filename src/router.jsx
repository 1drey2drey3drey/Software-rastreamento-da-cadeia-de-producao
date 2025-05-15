import { Routes, Route } from "react-router-dom";
import { Tela2 } from "./pages/Tela2";
import CadastroProdutor from "./CadastroProdutor";
import { Mapa1 } from "./pages/Mapa1";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<CadastroProdutor />} />
      <Route path="/mapa1" element={<Mapa1 />} />
      <Route path="/tela2" element={<Tela2 />} />
    </Routes>
  );
}
