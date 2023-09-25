import React, {useEffect, useRef, useState} from "react";
import DatePicker from "react-datepicker";
import ko from 'date-fns/locale/ko';
import "react-datepicker/dist/react-datepicker.css";


function CreateReservation({
                               person,
                               startDate,
                               endDate,
                               onCreate,
                               onChange,
                                onReservationChange
                           }) {

    const style = {
        display:"flex"
    }
    return <div style={style}>
        <input name="person"
               placeholder="예약자 성함"
               onChange={onChange}
            value={person}
        />
        <DatePicker name="startDate" value = {startDate} selected={startDate} onChange={(date) => onReservationChange(date)}
                    locale={ko}
                    >대여일</DatePicker>
        <DatePicker name="endDate"  value = {person}  selected={endDate} onChange={(date) => onReservationChange(date)}
                    locale={ko}
                    >반납일</DatePicker>
        <button onClick={onCreate}>예약 등록</button>
    </div>
}

export default CreateReservation;