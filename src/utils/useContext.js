import { createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const saludo = 'hola';

  return (
    <UserContext.Provider value={{saludo}}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext };
export { UserProvider };
