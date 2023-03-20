import { useState, useEffect } from 'react';
// import React from 'react';
import JejuItem from '../components/JejuItem'
import {getJejuList} from '../apis/JejuAPI';

function JejuList() {
    
    const [jejus, setJejus] = useState([]);

    useEffect(
        () => {
            setJejus(getJejuList());
            
        },
        []
        
    );
    console.log('jeju', jejus);

    return (

        <div>
            {jejus.map(jeju => <JejuItem jeju={jeju} key={jeju.name} />)}
        </div>

    );
}

export default JejuList; 
