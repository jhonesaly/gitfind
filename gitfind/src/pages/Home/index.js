import {Header} from "../../components/Header";
import background from "../../assets/background.png";
import "./styles.css";
import ItemList from "../../components/ItemList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="imagem de fundo"/>
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username"/>
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img 
              src="https://avatars.githubusercontent.com/u/120515160?v=4" 
              className="profile" 
              alt="imagem de perfil"
            />
            <div>
              <h3>Alyson Jhones</h3>
              <span>@jhonesaly</span> 
              <p>Descrição</p>
            </div>
          </div>
          <hr />
          <div>
            <h4>Repositórios</h4>
            <ItemList title="Rep1" description="Desc1"/>
            <ItemList title="Rep2" description="Desc2"/>
            <ItemList title="Rep3" description="Desc3"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
