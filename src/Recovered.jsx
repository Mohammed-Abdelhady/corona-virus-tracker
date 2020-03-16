import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'reactstrap';
const Recovered = () => {
  const [latest, setLatest] = useState(0);
  const [data, setData] = useState([
    {
      coordinates: {
        lat: '',
        long: ''
      },
      country: '',
      history: {},
      latest: 0
    }
  ]);
  useEffect(() => {
    axios
      .get('https://coronavirus-tracker-api.herokuapp.com/recovered')
      .then(res => {
        setLatest(res.data.latest);
        setData(res.data.locations);
      })
      .catch(err => {
        console.log(err.response);
      });
  });

  const sumHistory = obj => {
    let sum = 0;
    for (let [key, value] of Object.entries(obj)) {
      sum += value;
    }
    return sum;
  };

  const tableContent = data.map((item, index) => {
    return (
      <tr key={index}>
        <th scope='row'>{index}</th>
        <td>{item.coordinates.lat}</td>
        <td>{item.coordinates.long}</td>
        <td>{item.country}</td>
        <td>{item.latest}</td>
        <td>{sumHistory(item.history)}</td>
      </tr>
    );
  });
  return (
    <div className='container'>
      <div className='text-center'>
        <Link to='/' className='display-4 mb-5'>
          Home
        </Link>
        <h2>Recovered</h2>
        <h2>Latest: {latest}</h2>
        <Table>
          <thead>
            <th>#</th>
            <th>Lat</th>
            <th>Long</th>
            <th>Country</th>
            <th>Latest</th>
            <th>History</th>
          </thead>
          <tbody>{tableContent}</tbody>
        </Table>
      </div>
    </div>
  );
};

export default Recovered;
