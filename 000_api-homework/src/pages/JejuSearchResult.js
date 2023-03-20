// import {useEffect, useState} from 'react';
// import {useSearchParams} from 'react-router-dom';
// import {searchJeju} from '../apis/JejuAPI';
// import JejuItem from '../components/JejuItem';

// function JejuSearchResult() {

//     const [searchParams] = useSearchParams();

//     const [jejuList, setJejuList] = useState([]);

//     const name = searchParams.get('name');

//     useEffect(

//         () => {
//             setJejuList(searchJeju(name));
//         },
//         [name]
    
//     );
//     console.log(jejuList);

//     return (
//         <div>

//             <h1>검색됐다</h1>
//             <div className={boxStyle.JejuBox}>
//                 {jejuList.map(jeju => <JejuItem key = {jeju.name} jeju= {jeju}/>)}
//             </div>
//         </div>
//         );
// }

// export default JejuSearchResult;