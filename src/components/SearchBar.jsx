import { useState } from 'react'

const SearchBar = ({onSearch}) => {
   console.log(onSearch)
   const [id, setId] = useState('')
   const handleChange = (event) => {
      setId(() => event.target.value)
    }
   const handleEvent = (event) => {
      onSearch(event.target.value)
   }
   return (
      <div>
         <input type='search' onChange={handleChange}/>
         <button onClick={handleEvent} value={id} >Agregar</button>
      </div>
   );
}

export default SearchBar