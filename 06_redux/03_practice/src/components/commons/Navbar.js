import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <div>
            <ul>
                <li><NavLink to ='/'>메인으로 가보쟈</NavLink></li>
                <li><NavLink to = '/pokemons'>포켓몬 목록 보여줄게</NavLink></li>
            </ul>
        </div>   
    );
}

export default Navbar;