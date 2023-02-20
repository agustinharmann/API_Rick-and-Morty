import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [api, setApi] = useState(`https://rickandmortyapi.com/api/character`);

  const { info } = data;

  const input_search = ({ target }) => {
    let searchName = target.value;
    setName(searchName);
  }

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(api);
      const data = await resp.json();
      setData(data);
      setLoading(false);
    }

    fetchData()
  }, [api]);

  const getByName = async (e) => {
    e.preventDefault();
    const resp = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    const data = await resp.json();
    setData(data);
    setName('');
  }
  
  const prevPage = () => {
    info.prev && setApi(info.prev);
  };

  const nextPage = () => {
    info.next && setApi(info.next);
  };

  // ENVIAR RESULTS DE UNA A HOME Y A CARD PARA NO DESESTRUCTURAR DATA ALLA

  // VER SI SE PUEDE TRAER EL FECTH COMO HOOK O COMO HELPER

  return (
    <UserContext.Provider
      value={{
        data,
        loading,
        prevPage,
        nextPage,
        input_search,
        getByName,
        name
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext };
export { UserProvider };
