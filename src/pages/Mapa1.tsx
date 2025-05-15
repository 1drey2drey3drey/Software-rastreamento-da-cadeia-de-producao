import BarraLateral from "../components/BarraLateral";
import Mapa from "../components/Mapa";
import "../index.css";

export function Mapa1() {
  return (
    <div>
      <h1>Mapa</h1>

      <Mapa />
      <BarraLateral>
        <p>Conteúdo da barra lateral</p>
      </BarraLateral>

      <div className="butao">
        <button onClick={() => (window.location.href = "/tela2")}>
          Clique aqui
        </button>
      </div>
    </div>
  );
}
