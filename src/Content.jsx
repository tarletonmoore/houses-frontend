import { HousesIndex } from "./HousesIndex"
import { useState, useEffect } from "react"
import axios from "axios"

export function Content() {
const [houses, setHouses] = useState([])

const handleHousesIndex = () => {
  console.log("Handling houses")
  axios.get("http://localhost:3000/houses.json").then(response => {
    console.log(response.data)
    setHouses(response.data)
  })
}

useEffect(handleHousesIndex, [])

  return (
    <div>
      <HousesIndex houses={houses}/>
    </div>
  )
}