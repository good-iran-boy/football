export async function fetcher(url) {
    const data = await fetch(url, {
        method: "GET", headers: {
          "X-Auth-Token": "bfcd78c4f4da41098dc729f7f6570d26",
        }
      })
     const list =await data.json() ;
     return list
}