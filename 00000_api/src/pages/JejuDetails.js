import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { getJejuDetail, GetJejuDetail, JejuAPI } from '../apis/JejuAPI';
import Jeju from './Jeju';
import boxStyle from './Jeju.module.css';

function JejuDetails() {

    const {name} = useParams();

    console.log(name);
    const [jeju, setJeju] = useState({});
    

    useEffect(
        () => {   
            // const detail = JejuAPI();
            GetJejuDetail(name).then(res => {console.log(res); setJeju(res)});
            // console.log(detail);
        },
        []
    );

    return (
        <>
        <div className= {boxStyle.JejuBox}>
        <hr/>
        <br/>
        <h1  style={{ color : 'green'}}> {jeju.name}</h1>
        <br/>
        <hr/>
        <h3>주소 : {jeju.newAddr}</h3>
        <br/>
        <h3>설명 : {jeju.intro}</h3>
        <br/>
        <h3>기타 : {jeju.convFac}</h3>
        </div>
        </>
    );
}

export default JejuDetails;