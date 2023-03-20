import { useState, useEffect } from 'react';
import { JejuAPI } from '../apis/JejuAPI';
import JejuItem from '../components/JejuItem';
import boxStyle from './Jeju.module.css';
import {useNavigate} from 'react-router-dom';

function Jeju() {

    const [jejuList, setJejuList] = useState([]);
    const [btn, setBtn] = useState({});
    const [num, setNum] = useState(1);
    //const [img, setImg] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();


    useEffect(
        () => {
            // fetch(`https://apis.data.go.kr/6500000/jjtb/locinfo?serviceKey=xJLwIe5cL%2BKtCx7gy50KwmeeF7H8wa7rEhg2PW%2ByWzpEwWjNKrSwPaI6ZTAxv3vvSm1OeIXMYfo0LONBqkIDJg%3D%3D&pageNo=${num}&numOfRows=50`)
            //             .then(res => res.json())
            //             .then(jejudata => {
            //                 setJejuList(jejudata.data);
            //                 setBtn(jejudata);
            //             });
            JejuAPI(num).then(res => setJejuList(res));
        },
        [num]
    );
    console.log(jejuList);
    const onClickHandler = () => {
    navigate(`/jeju/search?name=${searchValue}`);
    }
    
    

    return(
        <>
        <hr/>
        <h2 style={{textAlign : 'center'}}> ☆★ 제주 관광지 ★☆</h2>
        <br/>
        <hr/>
        <div>
                <input
                    type="search"
                    name="name"
                    value={searchValue}
                    onChange={ e => setSearchValue(e.target.value)}
                />
                <button onClick={onClickHandler}>검색</button>
        </div>
        <br/>
        <div>
        <button onClick = {() => {
                    setNum(num-1)
                }}>이전 페이지</button>

                    <button
                        onClick = {() => {
                            setNum(num+1)
                        }}
                    
                    >다음 페이지</button>
        </div>
        <br/>
        <br/>
        <div className={boxStyle.JejuBox}>
            {jejuList.map(jeju => <JejuItem key = {jeju.name} jeju={jeju}/>)}
        </div>
        </>
    );

}


export default Jeju;