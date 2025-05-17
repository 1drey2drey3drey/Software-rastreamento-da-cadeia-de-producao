import BarraLateral from "../components/BarraLateral";
import Mapa from "../components/Mapa";
import "../index.css";

export function MapaAnonimo() {
  return (
    <div>
      <h1>Mapa Anonimo</h1>

      <Mapa />
      <BarraLateral
        itensMenu={[
          {
            texto: "Cadastro/Login",
            url: "/escolhaconta",
            icone: "🔑",
          },
          { texto: "Voltar", url: "/", icone: "🏠" },
        ]}
      >
        <p>Conteúdo da barra lateral</p>
      </BarraLateral>
    </div>
  );
}

export default MapaAnonimo;
