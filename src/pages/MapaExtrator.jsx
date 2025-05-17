import BarraLateral from "../components/BarraLateral";
import Mapa from "../components/Mapa";
import "../index.css";

export function MapaExtrator() {
  return (
    <div>
      <h1>Mapa Extrator</h1>

      <Mapa />
      <BarraLateral
        itensMenu={[
          {
            texto: "Rastrear Basqueta",
            url: "/rastrearbasquetae",
            icone: "🔎",
          },
          { texto: "Voltar", url: "/", icone: "🏠" },
        ]}
      >
        <p>Conteúdo da barra lateral</p>
      </BarraLateral>
    </div>
  );
}

export default MapaExtrator;
