import React, { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
function App() {
  const [details, setDetails] = useState({
    confirmed: 0,
    deaths: 0,
    recovered: 0
  });
  useEffect(() => {
    axios
      .get('https://coronavirus-tracker-api.herokuapp.com/all')
      .then(res => {
        setDetails({
          confirmed: res.data.latest.confirmed,
          deaths: res.data.latest.deaths,
          recovered: res.data.latest.recovered
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);
  return (
    <div>
      <div
        className='main d-flex justify-content-center align-items-center flex-column text-center'
        style={{ height: '100vh' }}
      >
        <h1 className='display-4 mb-5'>Tracking Coronavirus COVID-19</h1>
        <div className='boxes d-flex'>
          <Link to='/confirmed' className='box mr-5'>
            <h2>Confirmed</h2>
            <h2>{details.confirmed}</h2>
          </Link>
          <Link to='/deaths' className='box mr-5'>
            <h2>Deaths</h2>
            <h2>{details.deaths}</h2>
          </Link>
          <Link to='/recovered' className='box'>
            <h2>Recovered</h2>
            <h2>{details.recovered}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
