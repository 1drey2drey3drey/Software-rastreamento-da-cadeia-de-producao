import BarraLateral from "../components/BarraLateral";
import Mapa from "../components/Mapa";
import "../index.css";

export function MapaProdutor() {
  return (
    <div>
      <h1>Mapa Produtor</h1>

      <Mapa />
      <BarraLateral
        itensMenu={[
          {
            texto: "Rastrear Basqueta",
            url: "/rastrearbasquetap",
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

export default MapaProdutor;
