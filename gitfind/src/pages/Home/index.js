import {useState} from "react";

import { Header } from "../../components/Header";
import { ItemList } from "../../components/ItemList";
import { SearchButton } from "../../components/SearchButton";
import { UserInput } from "../../components/UserInput";
import { UserInfo } from "../../components/UserInfo";

import { api } from '../../services/api';

import "./styles.css"; 
import background from "../../assets/background.png";

function App() {
  const [user, setUser] = useState('');
  const [gitUser, setGitUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userResponse = await api.get(`${user}`);
    const newUser = userResponse.data;

    if(newUser.name){
      const { avatar_url, name, bio, login } = newUser;
      setGitUser({avatar_url, name, bio, login});

      const reposResponse = await api.get(`${user}/repos`);
      const newRepos = await reposResponse.data;

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
            <UserInfo user={gitUser} />
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
