import {useState} from "react";

import { Header } from "../../components/Header";
import { ItemList } from "../../components/ItemList";
import { SearchButton } from "../../components/SearchButton";
import { UserInput } from "../../components/UserInput";

import { api } from '../services/api';

import "./styles.css"; 
import background from "../../assets/background.png";

function App() {
  const [user, setUser] = useState('');
  const [gitUser, setGitUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if(newUser.name){
      const { avatar_url, name, bio, login } = newUser;
      setGitUser({avatar_url, name, bio, login});

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if (newRepos.length){
        setRepos(newRepos);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="imagem de fundo"/>
        <div className="info">
          <div>
          <UserInput
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
            <SearchButton onClick={handleGetData} />
          </div>
          {gitUser?.name ? (
          <>
          <div className="perfil">
          <img 
            src={gitUser.avatar_url}
            className="profile" 
            alt="imagem de perfil"
          />
          <div>
            <h3>{gitUser.name}</h3>
            <span>@{gitUser.login}</span> 
            <p>{gitUser.bio}</p>
          </div>
        </div>
        <hr />
        </>
          ) : null}
          {repos?.length ? (
          <div>
            <h4 className="repositorio">Repositórios:</h4>
            {repos.map(repo => (
            <ItemList title={repo.name} description={repo.description} />
            ))}
          </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
