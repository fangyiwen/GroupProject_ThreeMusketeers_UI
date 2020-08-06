import {createContext} from 'react';

//pass auth data between different components
export const AuthContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {}
});
