export function HousesIndex(props) {
console.log(props.houses)

  return (
    <div id="houses-index">
        <h1>All Houses</h1>
        <div className="row row-cols-2">
       {props.houses.map((house) => (
         <div key={house.id}>
          <div className="col">
          <div className="card">
  <div className="card-body">
           <p>Square Feet: {house.square_feet}</p>
           <p>bedrooms: {house.bedrooms}</p>
           <p>bathrooms: {house.bathrooms}</p>
           <p>Address: {house.address}</p>
           <a href={`/houses/${house.id}`}><button>Go to show page</button></a>
           </div>
           </div>
</div>
           </div>
           ))}
           </div>
    </div>
  )
}