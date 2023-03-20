import JejuAPI from "../apis/JejuAPI";
import {Link} from 'react-router-dom';
import itemStyle from '../components/JejuItem.css';


function JejuItem({ jeju }){

    return (
        <Link to ={`/jeju/${jeju.name}`}>
            <div className="item">
        <h2>{jeju.name}</h2>
        <hr/>
        <h4>{jeju.fl}</h4>
    
        </div>
        </Link>
    );
}

export default JejuItem;