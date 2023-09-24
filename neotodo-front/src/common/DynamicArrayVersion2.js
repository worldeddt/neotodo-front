import React from "react";



function DynamicVersion2({user, onRemove}) {
    const style = {display: "flex"};

    return <div style={style}>
        <div >이름 : {user.username}</div> <div>(email : {user.email})</div>
        <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
}

function DynamicArrayVersion2({users, onRemove}) {

    return (
        <div> // 동적인 배열을 렌더링해야 할 때에는 자바스크립트 배열의 내장함수 map() 을 사용
            {users.map(user => <DynamicVersion2 user={user} key={user.id} onRemove={onRemove}/>)
            }
        </div>
    );
}


export default DynamicArrayVersion2;