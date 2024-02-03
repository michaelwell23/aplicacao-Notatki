import { useState } from 'react';
import { useEffect } from 'react';
import { createContext, useContext } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/session', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('@notatki:user', JSON.stringify(user));
      localStorage.setItem('@notakti:token', token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível entrar.');
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@notatki:user');
    const token = localStorage.getItem('@notakti:toke');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
