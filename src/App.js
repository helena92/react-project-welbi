import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navigation from './routes/navigation/navigation.component';
import ResidentsHome from './routes/residents-home/residents-home.component';
import ProgramsHome from './routes/programs-home/programs-home.components';

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const tokenFromStorage = localStorage.getItem('token');
      if (tokenFromStorage) {
        setToken(tokenFromStorage);
      } else {
        try {
          const response = await fetch('https://welbi.org/api/start', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: 'elena.chornobai@gmail.com',
            })
          });
          const { data } = await response.json();
          localStorage.setItem('token', data.token);
          setToken(data.token);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchToken();
  }, []);

  return (
    <div>
      {token ?
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route path='residents/*' element={<ResidentsHome />} />
            <Route path='programs/*' element={<ProgramsHome />} />
          </Route>
        </Routes>
        : <p>Loading...</p>}
    </div>
  );
};

export default App;
