export default function SearchBar(props) {
   console.log(props, 'hola')
   const {onSearch} = props
   console.log(onSearch)
   return (
      <div>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
