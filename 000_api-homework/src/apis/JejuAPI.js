


// export function getJejuList() {
//     fetch('https://apis.data.go.kr/6500000/jjtb/locinfo?serviceKey=xJLwIe5cL%2BKtCx7gy50KwmeeF7H8wa7rEhg2PW%2ByWzpEwWjNKrSwPaI6ZTAxv3vvSm1OeIXMYfo0LONBqkIDJg%3D%3D&pageNo=1&numOfRows=10')
//                 .then(res => res.json())
//                 .then(jejudata => {
//                     setJejus(jejudata.data);
                    
//                 });
//     return JejuList; 
// }
// export function getJejuDetail(name) {
//     fetch('https://apis.data.go.kr/6500000/jjtb/locinfo?serviceKey=xJLwIe5cL%2BKtCx7gy50KwmeeF7H8wa7rEhg2PW%2ByWzpEwWjNKrSwPaI6ZTAxv3vvSm1OeIXMYfo0LONBqkIDJg%3D%3D&pageNo=1&numOfRows=10')
//                 .then(res => res.json())
//                 .then(jejudata => {
//                     setJejus(jejudata.data);
                    
//                 });
//     return jeju.filter(jeju => jeju.name === parseInt(name))[0]
// }


// export function searchJeju(name) {
//     fetch('https://apis.data.go.kr/6500000/jjtb/locinfo?serviceKey=xJLwIe5cL%2BKtCx7gy50KwmeeF7H8wa7rEhg2PW%2ByWzpEwWjNKrSwPaI6ZTAxv3vvSm1OeIXMYfo0LONBqkIDJg%3D%3D&pageNo=1&numOfRows=10')
//                 .then(res => res.json())
//                 .then(jejudata => {
//                     setJejus(jejudata.data);
                    
//                 });
//     return jeju.filter(jeju => jeju.name.match(name))}




    export function getJejuList() {
        return fetch('https://apis.data.go.kr/6500000/jjtb/locinfo?serviceKey=xJLwIe5cL%2BKtCx7gy50KwmeeF7H8wa7rEhg2PW%2ByWzpEwWjNKrSwPaI6ZTAxv3vvSm1OeIXMYfo0LONBqkIDJg%3D%3D&pageNo=1&numOfRows=10')
            .then(res => res.json());
                    
    }