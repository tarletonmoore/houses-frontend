import { HousesIndex } from "./HousesIndex"
import { useState, useEffect } from "react"
import axios from "axios"
import { HousesNew } from "./HousesNew"
import { About } from "./About"
import { HousesShow } from "./HousesShow"
import { Routes, Route } from "react-router-dom";


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
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/houses" element={<HousesIndex houses={houses}/>} />
      <Route path="/houses/new" element={<HousesNew onCreateHouse={handleCreateHouse}/>} />
    <Route path="/houses/:id" element={<HousesShow />}/>
      </Routes>
    </div>
  )
}