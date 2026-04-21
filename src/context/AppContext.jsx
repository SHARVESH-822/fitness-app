import { createContext, useContext, useReducer, useEffect } from 'react';
import AppReducer from '../reducer/AppReducer';
import { getToken, getData } from '../services/api';

const AppContext = createContext();
const initialState = { activities: [] };

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        const data = await getData(token);
        const clean = Array.isArray(data) ? data.filter(a => a && a.activityId) : [];
        dispatch({ type: 'SET_ACTIVITIES', payload: clean });
      } catch (err) {
        console.error('API Error:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);