export function HousesUpdate({house, onUpdateHouse}) {

  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    console.log('submitting')
 onUpdateHouse(house.id, params)
  }
  return (
    <form onSubmit={handleSubmit}>
        <div>
          Square Feet: <input name="square_feet" type="text" defaultValue={house.square_feet}/>
        </div>
        
        <div>
          Bedrooms: <input name="bedrooms" type="text" defaultValue={house.bedrooms}/>
        </div>
        <div>
         Bathrooms: <input name="bathrooms" type="text" defaultValue={house.bathrooms}/>
        </div>
        <div>
         Address: <input name="address" type="text" defaultValue={house.address}/>
        </div>
      <br></br>
        <button type="submit">Update house</button>
      </form>
  )
}