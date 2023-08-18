import SearchBar from '../SearchBar/SearchBar.jsx';
import style from './Nav.module.css'
import {Link} from 'react-router-dom'

export default function Nav ({onSearch, random, logout}){
    return (
        <nav>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
            alt=""
            width="20%"
            />
            <Link to='/home' className={style.links}>Home</Link>
            <Link to='/about' className={style.links}>About</Link>
            <Link to="/favorites" className={style.links}>Favorites</Link>
            <button className={style.links} onClick={logout}>LogOut</button>
        
        <SearchBar onSearch={onSearch} random={random}/>
        </nav>
    );

}