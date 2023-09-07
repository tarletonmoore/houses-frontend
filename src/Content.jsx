import { HousesIndex } from "./HousesIndex"
import { useState, useEffect } from "react"
import axios from "axios"
import { HousesNew } from "./HousesNew"

export function Content() {
const [houses, setHouses] = useState([])

const handleHousesIndex = () => {
  console.log("Handling houses")
  axios.get("http://localhost:3000/houses.json").then(response => {
    console.log(response.data)
    setHouses(response.data)
  })
}

const handleCreateHouse = (params, successCallback) => {
axios.post("http://localhost:3000/houses.json", params).then(response => {
  setHouses([...houses, response.data])
  successCallback()
})
}

useEffect(handleHousesIndex, [])

  return (
    <div>
      <HousesIndex houses={houses}/>
      <HousesNew onCreateHouse={handleCreateHouse}/>
    </div>
  )
}