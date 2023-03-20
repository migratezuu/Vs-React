import itemStyle from './JejuItem.module.css';
import { Link } from 'react-router-dom';

function JejuItem({ jeju }) {
    return (
        <Link to={`/jeju/${jeju.name}`}>
            <div className={itemStyle.JejuItem}>
                <h3>{jeju.fl}</h3>
                <h2>이름 : {jeju.name}</h2>
                <hr/>
                <h4>주소 : {jeju.newAddr}</h4>
            </div>
        </Link>
    );
}
export default JejuItem;