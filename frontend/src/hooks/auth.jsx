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

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível entrar.');
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@notatki:user');
    localStorage.removeItem('@notakti:token');

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('avatar', avatarFile);

        const response = await api.patch('/users/avatar', fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put('/users', user);
      localStorage.setItem('@notatki:user', JSON.stringify(user));

      setData({ user, token: data.token });

      alert('perfil atualizado com sucesso!');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Nao foi possível atualizar os dados.');
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@notatki:user');
    const token = localStorage.getItem('@notakti:token');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, user: data.user, signOut, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
