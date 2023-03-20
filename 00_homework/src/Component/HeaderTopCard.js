
const menuBar = {
    name : '메뉴바'       
};


const onClickGo = () =>window.open('http://www.google.com');

function HeaderTopCard(){
    return (
    <div className = "wrap">
    <h2 style = {{
            backgroundColor : 'white',
            color : 'white',
            cursor : 'pointer',
            height : 50,
            textAlign : 'center'}}> 
            <button style = {{width : 80, height : 50, float : "right",  backgroundColor : 'white', color : 'gray', border : "none", fontWeight:"bold"}} onClick = {onClickGo}>로그인</button> 
            <button style = {{width : 80, height : 50, float : "right",  backgroundColor : 'white', color : 'gray', border : "none", fontWeight:"bold"}} onClick = {onClickGo}>회원가입</button> 
            
            {menuBar.name}
        </h2>
    </div>
    );

}


export default HeaderTopCard;