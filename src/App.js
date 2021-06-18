
import React, { useEffect, useState } from 'react';
import Layout from "./components/Layout/Layout";
import Parallelogram from "./components/Parallelogram";
function App() {
  const [state, setstate] = useState([])
  useEffect(() => {

    fetch('https://api.football-data.org/v2/competitions/2021/matches?season=2020', {
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
<Parallelogram>بازی های لیگ برتر انگلیس</Parallelogram>
    </Layout>
  );
}

export default App;
