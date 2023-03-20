import { useState, useEffect } from 'react';
import AirItem from '../components/AirItem';
import boxStyle from './Jeju.module.css';


function About() {

    const [Airports, setAirports] = useState([]);

    useEffect(
        () => {
            fetch('http://api.odcloud.kr/api/getAPRTWaitTime/v1/aprtWaitTime?page=1&perPage=10&serviceKey=xJLwIe5cL%2BKtCx7gy50KwmeeF7H8wa7rEhg2PW%2ByWzpEwWjNKrSwPaI6ZTAxv3vvSm1OeIXMYfo0LONBqkIDJg%3D%3D')
                .then(res => res.json())
                .then(airdata => {
                    setAirports(airdata.data);
                });
        },
        []
    );
    console.log(Airports);
    // console.log(users);

    return (
        <div>
        <div className={boxStyle.JejuBox}>
            <hr/>
            {Airports.map(airport => <AirItem airport={airport} key={airport.IATA_APCD} />)}
        </div>
        </div>

    );
}

export default About;