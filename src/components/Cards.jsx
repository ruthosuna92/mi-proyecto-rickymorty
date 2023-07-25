import Card from './Card';


const Cards = ({characters}) => { 

     
   return (
      <div> 
         {
            characters.map((char) => {
               return <Card
                  id={char.id}
                  name={char.name}
                  status={char.status}
                  species={char.species}
                  gender={char.gender}
                  origin={char.origin}
                  image={char.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
                  key={char.id}
               />
            })
         }
     </div>
   );
}

export default Cards