import React, { useEffect, useState } from 'react';
import Layout from "./components/Layout/Layout";
import Game from './components/Game';

function App() {
  const [state, setstate] = useState([])
  const [url, seturl] = useState('https://api.football-data.org/v2/competitions/2021/matches?season=2020&dateFrom=2020-09-12&dateTo=2020-09-18')
  useEffect(() => {

    fetch('http://api.football-data.org/v2/teams/100', {
      method: "GET", headers: {
        "X-Auth-Token": "bfcd78c4f4da41098dc729f7f6570d26",
        accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => setstate(res))
  }, [])
  console.log(state);
  return (
    <Layout >
      <Game/>
    </Layout>
  );
}

export default App;
// 'http://api.football-data.org/v2/teams/57'