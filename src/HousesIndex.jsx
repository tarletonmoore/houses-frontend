export function HousesIndex(props) {
console.log(props.houses)

  return (
    <div>
        <h1>All photos</h1>
       {props.houses.map((house) => (
         <div key={house.id}>
           <p>Square Feet: {house.square_feet}</p>
           <p>bedrooms: {house.bedrooms}</p>
           <p>bathrooms: {house.bathrooms}</p>
           <p>Address: {house.address}</p>

           </div>
           ))}
    </div>
  )
}