import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export function HousesShow() {
  const [house, setHouse] = useState({})

  const params = useParams()

  const getHouseData = () => {
    axios.get(`http://localhost:3000/houses/${params.id}.json`).then(response => {
      setHouse(response.data)
    })
  }

  useEffect(getHouseData,[])

  return(
    <div>
      <p>Square Feet: {house.square_feet}</p>
      <p>Bedrooms: {house.bedrooms}</p>
      <p>Bathrooms: {house.bathrooms}</p>
      <p>Address: {house.address}</p>

    </div>
  )
}