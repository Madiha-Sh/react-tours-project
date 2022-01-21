import React, { useState, useEffect } from 'react';
import './App.css';
import Tours from './components/tours';
import Loading from './components/loading';

const App = () => {

  const url = 'https://course-api.com/react-tours-project';

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const getData = async () => {
  //   setIsLoading(true);
  //   fetch(url)
  //     .then(resp => {
  //       setIsLoading(false);
  //       if(resp.status >= 200 && resp.status <= 299){
  //         return resp.json();
  //       }
  //       else {
  //         console.log('error');
  //       }
  //     })
  //     .then(data => {
  //       setTours(data);
  //       setIsLoading(false);
  //   });
  // }

  const getData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setIsLoading(false);
      setTours(data);
    } catch(error) {
      setIsLoading(false);
      console.log(`ERROR: ${error}`);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const handleRemove = (id) => {
    const newTours = tours.filter(tour => id != tour.id)
    setTours(newTours)
  }

  if(isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }  
  if(tours.length === 0){  
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => getData()}>refresh</button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} handleRemove={handleRemove}/>
    </main>
  )
}

export default App;