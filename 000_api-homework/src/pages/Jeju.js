import { useState, useEffect } from "react";
import { getJejuList } from "../apis/JejuAPI";
import JejuItem from "../components/JejuItem";
import { useNavigate } from "react-router-dom";
import JejuList from "../components/JejuList";

function Jeju() {

    const [jejuList, setJejuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();

    useEffect(
        () => {
            setJejuList(getJejuList());

        },
        []
    );

    const onClickHandler = () => {
        navigate(`/jeju/search?name=${searchValue}`);
    }

    return (
        <>
            <h1>제주 관광지 목록</h1>
            <div>
                <input 
                type = "search"
                name = "name" 
                value = {searchValue}
                onChange={e => setSearchValue(e.target.value)}
                />
                <button onClick = {onClickHandler}>검색해봐라 한번 니가되나 내가되나</button>
            </div>
            <div>
                {/* {jejuList.map(jeju => <JejuItem key = {jeju.name} jeju = {jeju}/>)} */}
            </div>
        </>
    )
}
export default Jeju;