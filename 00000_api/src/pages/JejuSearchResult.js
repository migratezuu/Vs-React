import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {SearchJeju} from '../apis/JejuAPI';
import JejuItem from '../components/JejuItem';
import boxStyle from './Jeju.module.css';

function JejuSearchResult() {

    const [searchParams ] = useSearchParams();

    const [jejuList, setJejuList] = useState([]);
    
    const name = searchParams.get('name');

    
    useEffect(
        () => {
            SearchJeju(name).then(res => {console.log(res); setJejuList(res)});

        },
        [name]
    );
    console.log(jejuList);

    return (
        <div>
            <h1>검색된 이름</h1>
            <div className={boxStyle.JejuBox}>
                {jejuList.map(jeju => <JejuItem key = {jeju.name} jeju = {jeju}/>)}
            </div>
            
        </div>
    );
}

export default JejuSearchResult;