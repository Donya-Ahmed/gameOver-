import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
  let [allGames, setGames] = useState([])
  async function getData() {
    const {data} = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
      headers: {
        'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    })

    setGames(data.data)
    console.log(data.data)

  }
  useEffect(() => {
    getData()

  }, [])
  return (
    <div className='row mt-5'>
      {allGames.map((ele) => {
        <div className='col-md-3' key={ele.id}>
          <div>
          <img class=" object-fit-cover h-100" src={ele.thumbnail} />

          </div>
          <div>
            <p>{ele.title}</p>
          </div>
        </div>
      })}
    </div>
  )
}
