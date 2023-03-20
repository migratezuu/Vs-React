

const onClickGo = () =>window.open('http://www.google.com');

function MenuCard(){
    return (
    <div className = "wrap">    
    <h2 style = {{
            backgroundColor : 'white',
            color : 'gray',
            cursor : 'pointer',
            height : 50,
            textAlign : 'center'}}> 
            <button style = {{width : 130, height : 50, float : "left", backgroundColor : 'white', color : 'gray', border : "none", fontWeight:"bold"}} onClick = {onClickGo} >About</button> 
            <button style = {{width : 130, height : 50, float : "left", backgroundColor : 'white', color : 'gray', border : "none", fontWeight:"bold"}} onClick = {onClickGo}>Rode_Map</button> 
            <button style = {{width : 130, height : 50, float : "left",  backgroundColor : 'white', color : 'gray', border : "none", fontWeight:"bold"}} onClick = {onClickGo}>Hobby</button> 
            
            
        </h2>
        <hr></hr>
    </div>

    )
}

export default MenuCard;