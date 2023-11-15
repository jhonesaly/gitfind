import {useState} from "react";

import { Header } from "../../components/Header";
import { ItemList } from "../../components/ItemList";
import { SearchButton } from "../../components/SearchButton";
import { UserInput } from "../../components/UserInput";
import { UserInfo } from "../../components/UserInfo";
import { Background } from "../../components/Background";

import { api } from '../../services/api';

import "./styles.css"; 

function App() {
  const [user, setUser] = useState('');
  const [gitUser, setGitUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGetData = async () => {
    try {
      setLoading(true);
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
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <Background />
        <div className="info">
          <UserInput
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
          <SearchButton onClick={handleGetData} />
          {loading && <p className="loading-text">Carregando...</p>}
          {!loading && gitUser?.name && <UserInfo user={gitUser} />}
          {!loading && repos?.length && <ItemList title="Repositórios" items={repos} />}
        </div>
      </div>
    </div>
  );
}

export default App;
