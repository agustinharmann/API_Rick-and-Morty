import React from 'react';
import { createContext, useState, useEffect, useCallback } from 'react';
import { URL_API } from '../utils/constants';

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [api, setApi] = useState(URL_API);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [specie, setSpecie] = useState('');
  const [singleCharacter, setSingleCharacter] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [error, setError] = useState(false);

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

  const onInputChange = ({ target }) => {
    let searchName = target.value;
    setInputValue(searchName);
    setName('');
    setApi(URL_API);
    toggleDropdown()
  };

  const getSingleCharacter = useCallback(async (id) => {
    const request = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await request.json();
    setSingleCharacter(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    getResults();
    console.log(api);
  }, [getResults, api]);

  const { info, results } = data;

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

  const characterStatus = ['Alive', 'Dead', 'Unknow'];

  const characterSpecie = ['Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological', 'Unknown', 'Animal', 'Disease', 'Robot', 'Cronenberg', 'Planet'];

  const characterGender = ['Female', 'Male', 'Genderless', 'Unknow'];

  const [dropdownState, setDropdownState] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false
  });

  const toggleDropdown = (stringParam) => {
    setDropdownState(prevState => ({
      dropdown1: stringParam === 'dropdown1' && !prevState.dropdown1,
      dropdown2: stringParam === 'dropdown2' && !prevState.dropdown2,
      dropdown3: stringParam === 'dropdown3' && !prevState.dropdown3
    }));
  };

  useEffect(() => {

    const windowResize = () => {

      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 800) {
        setFiltersOpen(true);
      } else {
        setFiltersOpen(false);
      }
    };

    window.addEventListener('resize', windowResize);
    return () => {
      window.removeEventListener('resize', windowResize);
    };
    
  }, []);

  const dropFilters = () => {
    setFiltersOpen(!filtersOpen);
  };

  const scrollTo = () => {
    window.scrollTo(0, 0);
  }

  filtersOpen && windowWidth < 768 ? document.body.classList.add('noscroll') : document.body.classList.remove('noscroll');

  return (
    <UserContext.Provider
      value={{
        loading,
        URL_API,
        info,
        results,
        setApi,
        onInputChange,
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
        handleSubmit,
        onCleanFilters,
        characterStatus,
        characterSpecie,
        characterGender,
        dropdownState,
        toggleDropdown
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext };
export { UserProvider };
