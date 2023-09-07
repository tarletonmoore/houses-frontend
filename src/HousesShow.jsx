import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { HousesUpdate } from "./HousesUpdate"

export function HousesShow({  onDeleteHouse}) {
  const [house, setHouse] = useState({})

  const params = useParams()

  const getHouseData = () => {
    axios.get(`http://localhost:3000/houses/${params.id}.json`).then(response => {
      setHouse(response.data)
    })
  }

  const handleUpdateHouse = (id, params) => {
    console.log("workin")
    axios.patch(`http://localhost:3000/houses/${id}.json`, params).then(response => {
      setHouse(response.data)
      // setHouses(houses.map(house => {
      //   if (house.id === id) {
      //     return response.data;
      //   } else {
      //     return house;
      //   }
      // }))
    })
    }

    const handleClick = () => {
      console.log('click')
      onDeleteHouse(house.id)
    }

  useEffect(getHouseData,[])

  return(
    <div>
      <p>Square Feet: {house.square_feet}</p>
      <p>Bedrooms: {house.bedrooms}</p>
      <p>Bathrooms: {house.bathrooms}</p>
      <p>Address: {house.address}</p>
      <br></br>
      <button onClick={handleClick}>Delete House</button>
      <br></br>
      <br></br>
      <HousesUpdate house={house} onUpdateHouse={handleUpdateHouse} />
    </div>
  )
}