const headerTop = {
    name : '부가~'
};


const header = {
    name : ''
};

const menuBar = {
    name : '메뉴바'       
};

const mainBar = {
    name : '@lovya'
};
const user = {
    name : '유저'
};


const footer = {
    name : 'Copyright 2023. team-greedy all right reserved.'
};


const onClickGo = () =>window.open('http://www.google.com');

function MainContextCardMy(){
    return (
        <div className = "wrap">
            <div className = "container"> 
            <div style = {{
                width :'15%',
                height : 500,
                backgroundColor : 'white',
                color : 'gray',
                fontWeight : "bold",
                textAlign : 'center',
                float : "left",
                border: '1px solid gray',
                fontWeight : "bold",
                margin : 20
            }}
            >
            <div className = "image" style = {{
                width : '82%',
                height : 250,
                border : '1px solid gray',
                backgroundColor: 'gray',
                margin : 20
            }}  
            > </div>
            {mainBar.name}
            </div>
            <div style = {{
                width : '82%',
                height : 500,
                backgroundColor : 'white',
                color : 'black',
                textAlign : 'center',
                float : "left",
                border: '1px solid gray',
                margin : 20

            }}   
            >
                <h2>자기소개 쓸거임 진짜 집가고싶어
                <br/>
                <h1>배고파 배고프다구요</h1>    
                </h2>    
                </div> 
        </div>

        </div>

    );

}
