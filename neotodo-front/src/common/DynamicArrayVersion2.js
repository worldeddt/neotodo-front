import React, {useEffect} from "react";



function DynamicVersion2({user, onRemove, onToggle}) {
    const style = {display: "flex"};

    useEffect(() => {
        return () => {
            if (user.active) {
                console.log(user);
                console.log('dddd');
            }
        };
    }, [user]);

    return <div style={style}>
        <b
            style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
            }}
            onClick={() => onToggle(user.id)}
        >
            {user.username}
        </b>
        <div >이름 : {user.username}</div> <div>(email : {user.email})</div>
        <button onClick={() => onRemove(user.id)}>삭제</button>
        <button onClick={() => console.log(user)}>현재 상태</button>
    </div>
}

function DynamicArrayVersion2({users, onRemove, onToggle}) {

    return (
        <div> // 동적인 배열을 렌더링해야 할 때에는 자바스크립트 배열의 내장함수 map() 을 사용
            {users.map(user => <DynamicVersion2 user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>)}
        </div>
    );
}


export default DynamicArrayVersion2;