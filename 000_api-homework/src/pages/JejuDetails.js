// import { getJejuDetail } from "../apis/JejuAPI";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// function JejuDetails() {
//     const {name} = useParams();

//     const [jeju, setJeju] = useState({
//         name : ''
//     });

//     useEffect(
//         () => {
//             setJeju(getJejuDetail(name));
//             console.log(jeju);
//         },
//         []
//     );

//     return (
//         <>
//             <h2>이름 : {jeju.name}</h2>
//         </>
//     );
// }

// export default JejuDetails;