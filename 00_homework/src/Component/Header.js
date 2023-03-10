


function Header(){
    const header = {
        name : ''
    };
    return (
        <div className = "wrap">
        <h2 style = {{
            backgroundColor : 'white',
            color : 'black',
            cursor : 'pointer',
            textAlign : 'center',
            height : 200}}> 
            {header.name}
        </h2>
    </div>
        );
}

export default Header;