import { createContext, useState, useEffect } from 'react';
import { Error } from '../components/Error';

const UserContext = createContext();

const UserProvider = ({ children }) => {

  //pasar a funcion donde despues de api (setApi()) reciba el parametro de lo que queremos mostrar
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGenre] = useState('');
  const [specie, setSpecie] = useState('');
  const [navigator, setNavigator] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setFiltersOpen(true);
      } else {
        setFiltersOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const toggleMenu = () => {
    setFiltersOpen(!filtersOpen);
  }

  // al dar enter o click en search close de filters

  // scrll top

  // validacio de no scroll solo en responsive

  // poder hacer que al width dejar de ser responsive hacer que ese estado devuelva o active eso

  // cambiar el className de menu a filters del componente header

  // buscar y eliminar componente por componente los navigators y setNavigators que no se utilizan

  // contenedor del menu en Navbar, propiedades del menu en el menu

  // acomodar los componentes del menu y sus csss

  // const [api, setApi] = useState(`https://rickandmortyapi.com/api/character/?name=${name}&${status}&${specie}&${gender}`);
  const [api, setApi] = useState(`https://rickandmortyapi.com/api/character`);

  // agregar q x default ese en home
  // const [drop, setDrop] = useState(false);

  // const [ fetch, setFetch ] = useState()

  // const [tomi, setTomi] = useState({ prev: false, next: false });
  // los dos en false
  // si uno llega a estar el false q el estado sea componente error

  const { info } = data;

  const input_search = ({ target }) => {
    let searchName = target.value;
    searchName.length >= 1 ? console.log('mass') : console.log('menos');;
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
    try {
      const resp = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${specie}&gender=${gender}`);
      if (resp.ok) {
        const data = await resp.json();
        setData(data);
        console.log(resp);
      } else {
        throw new Error('Error al obtener los datos');
      }
    } catch (error) {
      setError(true);
    }
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
        input_search,
        name,
        getByName,


        windowWidth,
        toggleMenu,
        filtersOpen,

        setNavigator,
        navigator,

        specie,
        status,
        gender,
        setStatus,
        setSpecie,
        setGenre,
        error,
        setError,
        prevPage,
        nextPage
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext };
export { UserProvider };
