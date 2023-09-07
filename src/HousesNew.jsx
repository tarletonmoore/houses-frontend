export function HousesNew(props) {
const handleSubmit = (e) => {
e.preventDefault()
const params = new FormData(e.target)
props.onCreateHouse(params, () => e.target.reset())
}

  return(
    <div>
<h1>New House</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Square Feet: <input name="square_feet" type="text" />
        </div>
        <div>
          Bedrooms: <input name="bedrooms" type="text" />
        </div>
        <div>
          Bathrooms: <input name="bathrooms" type="text" />
        </div>
        <div>
          Address: <input name="address" type="text" />
        </div>
        <button type="submit">Create house</button>
      </form>    
      </div>
  )
}