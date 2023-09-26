import React, {useRef, useReducer, useCallback, useMemo} from 'react';
import CreateUser from "./common/CreateUser";
import DynamicArrayVersion2 from "./common/DynamicArrayVersion2";
import useInputs from "./hooks/useInputs";

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

const initialState = {
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]
};

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.id ? { ...user, active: !user.active } : user
                )
            };
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            };
        case 'CREATE_USER':
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
            };
        case 'REMOVE_USER':
            state.users.map(user =>
                user.id === action.id ? { ...user, active: !user.active } : user
            )

            // return {
            //
            //
            //     // users: state.users.filter(user => user.id !== action.id)
            // };
        default:
            return state;
    }
}

function App() {
    const [{ username, email }, onChange, reset] = useInputs({
        username: '',
        email: ''
    });

    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);

    const { users } = state;

    const onToggle = useCallback(id => {
        dispatch({
            type: 'TOGGLE_USER',
            id
        });
    }, []);

    const onCreate = useCallback(() => {
        if (!username || !email) return;

        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        });
        nextId.current += 1;
        reset();
    }, [username, email, reset]);

    const onRemove = useCallback(id => {
        dispatch({
            type: 'REMOVE_USER',
            id
        });
    }, []);

    const userCount = useMemo(() => countActiveUsers(state.users), [state.users])

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <DynamicArrayVersion2 onToggle={onToggle} onRemove={onRemove} users={users} />
            <div>활성사용자 수 : {userCount}</div>
        </>
    );
}

export default App;