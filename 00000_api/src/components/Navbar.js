import { NavLink } from 'react-router-dom';

function Navbar() {

    const activeStyle = {
        backgroundColor: 'pink'
    };

    const onClickhandler 
        = () =>window.open('http://www.naver.com');
    

    return (
        <div className="wrap"
            style={{
                display: 'center',
                height: '50px'
            }}>

            <button style={{ width: 130, height: 50, float: "left", backgroundColor: 'white', color: 'gray', border: "none", fontWeight: "bold" }}><NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>MAIN</NavLink></button>
            <button style={{ width: 130, height: 50, float: "left", backgroundColor: 'white', color: 'gray', border: "none", fontWeight: "bold" }}><NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}>AIRPORT</NavLink></button>
            <button style={{ width: 130, height: 50, float: "left", backgroundColor: 'white', color: 'gray', border: "none", fontWeight: "bold" }}><NavLink to="/Jeju" style={({ isActive }) => isActive ? activeStyle : undefined}>JEJU</NavLink></button>
            <button style={{ width: 130, height: 50, float: "left", backgroundColor: 'white', color: 'gray', border: "none", fontWeight: "bold" }} onClick = {onClickhandler}>GO</button>
        </div>

    )
}

export default Navbar;