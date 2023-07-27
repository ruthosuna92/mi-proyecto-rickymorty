import SearchBar from './SearchBar.jsx';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = ({onSearch}) => {
    return (
        <div className='barraNav'>
            <button><NavLink to='/about'> About </NavLink> </button>
            <button><NavLink to='/home'> Home </NavLink> </button>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav