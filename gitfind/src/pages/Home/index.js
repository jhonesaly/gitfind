import {useState} from "react";
import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import "./styles.css";
import ItemList from "../../components/ItemList";

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    console.log(newUser);
  }

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="imagem de fundo"/>
        <div className="info">
          <div>
            <input 
              name="usuario" 
              value={user} 
              onChange={(event) => setUser(event.target.value)} 
              placeholder="@username"
            />
            <button onClick={handleGetData}>Buscar</button>
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
            <h4 className="repositorio">Repositórios</h4>
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
