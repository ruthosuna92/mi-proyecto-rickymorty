
const Card = ({onClose, name, status, species, gender, origin, image, id}) => {
   
   return (
      <div key = {id}>
         <button onClick={() => onClose(id)} value={id}>X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <img src={image} alt={image} />
      </div>
   );
}

export default Card
