import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './components/table';
import Form from './components/form';
import BootstrapCarousel from './components/carousel';
import Table2 from './components/table2';
import Form2 from './components/form2';

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  // A function to refresh data from the server
  const refreshData = () => {
    axios.get('http://localhost/capstone/index.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  // Call refreshData on component mount
  useEffect(refreshData, []);

  const handleFormSuccess = () => {
    refreshData(); // Call refreshData after form submission
    
  };

  const handleForm2Success = () => {
    axios.get('http://localhost/capstone/index2.php')
      .then(response => {
        setData2(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };
  

  return (
    <div className="App">
      <Form onSuccess={handleFormSuccess} />
      <Table data={data} />
      <BootstrapCarousel carouselItems={data} />
      <Form2 onSuccess={handleForm2Success} />
    <Table2 data2={data2} />
    </div>
  );
}

export default App;
