import React, { useEffect, useState } from 'react';
import Layout from "./components/Layout/Layout";
import Game from './components/Game';
import { fetcher } from './components/lib/fetcher';

function App() {
  const [data, setdata] = useState([])
  const [url, seturl] = useState('https://api.football-data.org/v2/competitions/2021/matches?season=2020&dateFrom=2020-09-12&dateTo=2020-09-18')

  
  useEffect(() => {
    async function fetching(params) {
      const lists = await fetcher(url);
      setdata(lists.matches)
    }
    fetching()
   
  }, [])
  return (
    <Layout >
      {data.map((game, i) => {
       return <Game data={game} key={i}/>
      })}

    </Layout>
  );
}

export default App;
// 'http://api.football-data.org/v2/teams/57'

// const convertArrayToObject = (array, key) => {
//   const initialValue = {};
//   return array.reduce((obj, item) => {
//     return {
//       ...obj,
//       [item[key]]: item,
//     };
//   }, initialValue);

// };

// const obj=convertArrayToObject(data,'id');
// const jsonli=JSON.stringify(obj)
// console.log(obj);