import React from "react";

function DynamicReservation({reservation, onRemove}) {

    const style = {
        display:"flex"
    }

    return <div style={style}>
        <div>예약자 : {reservation.person} / </div>&nbsp;
        <div>대여일 : {reservation.startDate} / </div>&nbsp;
        <div>반납일 : {reservation.endDate} </div>&nbsp;
        <button onClick={() => onRemove(reservation.reservationNumber)}> 삭제</button>
    </div>
}

function DynamicArrayReservation({reservations, onRemove}) {
    // 동적인 배열을 렌더링해야 할 때에는 자바스크립트 배열의 내장함수 map() 을 사용

    return (
        <div>
            {reservations.map(reservation =>
                <DynamicReservation reservation={reservation} key={reservation.reservationNumber}
                                 onRemove={onRemove}/>
            )}
        </div>
    );
}


export default DynamicArrayReservation;