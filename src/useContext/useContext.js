import { createContext, useState, useEffect, useCallback } from 'react';
import {URL_API} from '../utils/constants';

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [navigator, setNavigator] = useState(''); futura funcionalidad
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [singleCharacter, setSingleCharacter] = useState('');
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [specie, setSpecie] = useState('');

  const [api, setApi] = useState(URL_API);

  const filtros = `name=${name}&status=${status}&species=${specie}&gender=${gender}`;


  const getResults = useCallback(async () => {
    try {
      const response = await fetch(`${api}&${filtros}`);
      if (response.ok) {
        const data = await response.json();
        setLoading(false);
        setError(false);
        setData(data);
      } else {
        const error = new Error();
        throw error;
      }
    } catch (error) {
      setError(true);
    };
  }, [api, filtros]);

  function handleSubmit(e) {
    e.preventDefault();
  };

  const input_search = ({ target }) => {
    let searchName = target.value;
    setInputValue(searchName);
    setName('');
    setApi(URL_API);
  };

  const getSingleCharacter = useCallback(async (id) => {
    const request = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await request.json();
    setSingleCharacter(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    getResults();
  }, [getResults]);

  const { info } = data;

  const prevPage = () => {
    info.prev && setApi(info.prev);
  };

  const nextPage = () => {
    info.next && setApi(info.next);
  };

  const onCleanFilters = () => {
    setStatus('');
    setSpecie('');
    setGender('');
    setApi(URL_API);
  };

  useEffect(() => {

    const windowResize = () => {

      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setFiltersOpen(true);
      } else {
        setFiltersOpen(false);
      }
    };

    window.addEventListener('resize', windowResize);
    return () => {
      window.removeEventListener('resize', windowResize);
    };
    // console.log(windowWidth);
  }, []);

  const dropFilters = () => {
    setFiltersOpen(!filtersOpen);
  };

  const scrollTo = () => {
    window.scrollTo(0, 0);
  }

  filtersOpen && windowWidth < 768 ? document.body.classList.add('noscroll') : document.body.classList.remove('noscroll');


  // console.log(name);
  return (
    <UserContext.Provider
    // exportar info y result de data
      value={{
        data,
        setApi,
        loading,
        input_search,
        name,
        setName,
        inputValue,
        windowWidth,
        dropFilters,
        filtersOpen,
        specie,
        status,
        gender,
        setStatus,
        setSpecie,
        setGender,
        error,
        prevPage,
        nextPage,
        getSingleCharacter,
        scrollTo,
        singleCharacter,
        // ver si esto es incesario y se puede borrar
        handleSubmit,
        onCleanFilters
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext };
export { UserProvider };
