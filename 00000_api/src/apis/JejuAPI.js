// import { useState, useEffect } from 'react';

// export function GetJejuDetail(infoId) {

//     const [jejuList, setJejuList] = useState([]);

//     useEffect(
//         () => {
//             fetch('https://apis.data.go.kr/6500000/jjtb/locinfo?serviceKey=xJLwIe5cL%2BKtCx7gy50KwmeeF7H8wa7rEhg2PW%2ByWzpEwWjNKrSwPaI6ZTAxv3vvSm1OeIXMYfo0LONBqkIDJg%3D%3D&pageNo=1&numOfRows=10')
//                 .then(res => res.json())
//                 .then(jejudata => {
//                     setJejuList(jejudata.data);
//                 });
//             },
//             []
//         );
//     console.log(jejuList);
//     // console.log(users);

//     return jejuList.filter(jeju => jeju.infoId === parseInt(infoId))[0];
// }

export async function JejuAPI(num) {
    return await fetch(`https://apis.data.go.kr/6500000/jjtb/locinfo?serviceKey=xJLwIe5cL%2BKtCx7gy50KwmeeF7H8wa7rEhg2PW%2ByWzpEwWjNKrSwPaI6ZTAxv3vvSm1OeIXMYfo0LONBqkIDJg%3D%3D&pageNo=${num}&numOfRows=20`)
                    .then(res => res.json())
                    .then(jeju => jeju.data)

};


export async function GetJejuDetail(name) {
    return await fetch('https://apis.data.go.kr/6500000/jjtb/locinfo?serviceKey=xJLwIe5cL%2BKtCx7gy50KwmeeF7H8wa7rEhg2PW%2ByWzpEwWjNKrSwPaI6ZTAxv3vvSm1OeIXMYfo0LONBqkIDJg%3D%3D&pageNo=1&numOfRows=20')
                    .then(res => res.json())
                    .then(jeju => jeju.data).then(res => res.filter(jeju => jeju.name === (name))[0]);

};

export async function SearchJeju(name) {
    return await fetch('https://apis.data.go.kr/6500000/jjtb/locinfo?serviceKey=xJLwIe5cL%2BKtCx7gy50KwmeeF7H8wa7rEhg2PW%2ByWzpEwWjNKrSwPaI6ZTAxv3vvSm1OeIXMYfo0LONBqkIDJg%3D%3D&pageNo=1&numOfRows=20')
                    .then(res => res.json())
                    .then(jeju => jeju.data).then(res => res.filter(jeju => jeju.name.match(name)));

};