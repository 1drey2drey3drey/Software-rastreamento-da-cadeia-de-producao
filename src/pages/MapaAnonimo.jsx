import BarraDePesquisa from "../components/BarradePesquisa";
import BarraLateral from "../components/BarraLateral";
import Mapa from "../components/Mapa";
import "../index.css";

export function MapaAnonimo() {

  // const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <h1>Mapa Anonimo</h1>
      <BarraDePesquisa />
      <Mapa />
      <BarraLateral
        itensMenu={[
          {
            texto: "Login",
            url: "/login",
            icone: "🔑",
          },
          { texto: "Cadastrar-se",
            url: "/escolhaconta",
            icone: "🏠" },
        ]}
      >
        <p>Conteúdo da barra lateral</p>
      </BarraLateral>
    </div>
  );
}

export default MapaAnonimo;
