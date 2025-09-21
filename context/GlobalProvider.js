import { createContext, useContext, useState,useEffect, Children} from 'react'

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <GlobalContext.Provider
        value={{
            username,
            setUsername,
            email, 
            setEmail,
            password, 
            setPassword,
        }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

