"use client"

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';

import api from '../config/api';

export const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [token, setToken] = useState<any>(null);
  const [message, setMessage] = useState<string>('');

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("response.data", response.data)
        localStorage.setItem('token', response.data.token);
        setToken(response.data.token);
        const token = localStorage.getItem('token');
        if (token) {
          setToken(token);
          me(token);
        }
      }
    } catch (error: any) {
      setMessage(error.response.data.message)
    }
  };

  const me = async (token: any) => {
    try {
      const response = await api.get('/auth/me', {
        headers: {
          Accept: 'application/json',
          Context_Type: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setUser(response.data);
        await router.push('/')
      }
    } catch (error: any) {
      setMessage(error.response.data.message)
    }
  };
  const register = async (email: File | string, password: File | string) => {
    const { data: response } = await api.post('auth/register', {
      email,
      password,
    });

    return response.data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      me(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ login, register, logout, user, message }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
