const footer = {
    name : 'Copyright 2023. team-greedy all right reserved.'
};


function FooterCard(){
    return (
    <div className = "wrap">    
    <h2 style = {{
            backgroundColor : 'white',
            color : 'gray',
            cursor : 'pointer',
            textAlign : 'center',
            width : '100%',
            height : 80
        }}> 
            {footer.name}
        </h2>
    </div>
    );
}

export default FooterCard;