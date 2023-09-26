import React from "react";


function CreateUser({
    username,
    email,
    onChange,
    onCreate,
                        onkeyup
}) {

    const enterEvent = e => {
        if (e.keyCode === 13) onCreate();
    }

    return <div>
        <input
            name="username"
            placeholder="계정명"
            onChange={onChange}
            value={username}
            onKeyUp={enterEvent}

        />
        <input
            name="email"
            placeholder="이메일"
            onChange={onChange}
            value={email}
            onKeyUp={enterEvent}
        />
        <button  onClick={onCreate}>등록</button>
    </div>
}

export default React.memo(CreateUser);