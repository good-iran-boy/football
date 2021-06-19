import React, { useEffect, useState } from 'react';
import Layout from "./components/Layout/Layout";
import Game from './components/Game';
import { fetcher } from './components/lib/fetcher';

function App() {
  const baseUrl="https://api.football-data.org/v2/competitions/2021/matches?season=2020&"
  const [data, setdata] = useState([])
  const [url, seturl] = useState(`https://api.football-data.org/v2/competitions/2021/matches?season=2020&dateFrom=2020-09-12&dateTo=2020-09-18`)
  const [loading, setloading] = useState(true)
  const ChangeSelect = (e) => {
    seturl(baseUrl+e.target.value)
    setloading(!loading);
  }
  useEffect(() => {
    async function fetching() {
      const lists = await fetcher(url);
      setdata(lists.matches)
      setloading(false);
    }
    fetching()

  }, [url])
  return (
    <Layout select={ChangeSelect}>
      {loading ? <div className='loading'>
        <p className="loading_txt">... لطفا صبر کنید  </p>
      </div> : data.map((game, i) => {
        return <Game data={game} key={i} />
      })}
    </Layout>
  );
}

export default App;
