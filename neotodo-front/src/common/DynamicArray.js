import React from "react";



function Dynamic({user}) {
    const style = {display: "flex"};

    return <div style={style}>
        <div >이름 : {user.username}</div> <div>email : {user.email}</div>
    </div>
}

function DynamicArray() {

    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ];

    return (
        <div> // 동적인 배열을 렌더링해야 할 때에는 자바스크립트 배열의 내장함수 map() 을 사용
            {users.map(user => <Dynamic user={user} key={user.id}/>)
            }
        </div>
    );
}


export default DynamicArray;