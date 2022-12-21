import React, { createContext, useContext, useEffect, useState } from 'react';

type AuthContextDefinition  = {
  auth: boolean,
  setAuth: React.Dispatch<React.SetStateAction<boolean>>,
  user: string | null,
}

const AuthContext = createContext({
  auth: false,
  setAuth: () => {},
  user: null,
} as AuthContextDefinition);

export const useAuth = () => useContext(AuthContext);

const isAExistingCookie = (name: string) =>  {
  const cookieNames = document.cookie.split(";").map(x => x.split("=")[0]);
  return cookieNames.includes(name);
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState<string | null >("");

  useEffect(() => {
    const isAuth = async () => {
      const cookieExists = isAExistingCookie("auth-login")
      setAuth(cookieExists);
      setUser(cookieExists ? "maria" : null);
    };

    isAuth();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;