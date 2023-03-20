function AirItem({ airport }) {


    return (
        <div className="item">
            <div className = "container">
                <h2> 공항명 : {airport.IATA_APCD} 공항</h2>
                <hr />
                <h4> 운영상태 : {airport.OPR_STS_CD === '1' ? '운영중' : '미운영'}</h4>
                <h4> 새로고침 시간 : {airport.PRC_HR} </h4>
                <hr />
                <h4> A GATE : {(airport.STY_TCT_AVG_A / 60).toFixed(1)} 분 소요 예상</h4>
                <h4> B GATE : {(airport.STY_TCT_AVG_B / 60).toFixed(1)} 분 소요 예상</h4>
                <h4> C GATE : {(airport.STY_TCT_AVG_C / 60).toFixed(1)} 분 소요 예상</h4>
                <h4> D GATE : {(airport.STY_TCT_AVG_D / 60).toFixed(1)} 분 소요 예상</h4>

            </div>
        </div>
    )
}
export default AirItem;