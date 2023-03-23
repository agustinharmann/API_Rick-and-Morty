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
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  // const [api, setApi] = useState(`https://rickandmortyapi.com/api/character/?name=${name}&${status}&${specie}&${gender}`);
  const [api, setApi] = useState(`https://rickandmortyapi.com/api/character`);

  // console.log(navigator);
  // console.log(gender);
  // console.log(status);
  // console.log(specie);
  // gender.length >= 1 && console.log('gender: si');
  // status.length >= 1 && console.log('status: si');
  // specie.length >= 1 && console.log('species: si');


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

  // const getByName = async (e) => {
  //   e.preventDefault();
  //   const resp = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${specie}&gender=${gender}`);
  //   const data = await resp.json();
  //   setData(data);
  //   console.log(resp);
  // }

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

  // const getDrop = () => {
  //   setDrop(!drop)
  // }

  const prevPage = () => {
    info.prev && setApi(info.prev);
  };

  const nextPage = () => {
    info.next && setApi(info.next);
  };


  // ENVIAR RESULTS DE UNA A HOME Y A CARD PARA NO DESESTRUCTURAR DATA ALLA

  // VER SI SE PUEDE TRAER EL FECTH COMO HOOK O COMO HELPER


  // const [ width, setWidth ] = useState(0);

  // useEffect(()=>{
  //   setWidth(window.innerWidth)
  // }, [])
  // console.log(width);

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
        menuOpen,

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
        // drop,
        // getDrop,
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
