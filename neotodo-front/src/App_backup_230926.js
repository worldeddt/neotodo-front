import React, {useRef, useReducer, useCallback, useMemo} from 'react';
import CreateUser from "./common/CreateUser";
import DynamicArrayVersion2 from "./common/DynamicArrayVersion2";
import useInputs from "./hooks/useInputs";
import {produce} from "immer";

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
            return produce(state, draft => {
                const findUser = draft.users.find(user => user.id === action.id);
                findUser.active = !findUser.active;
            });
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            };
        case 'CREATE_USER':
            return produce(state, draft => {
                draft.users.push(action.user);
            });
        case 'REMOVE_USER':
            return produce(state, draft => {
                const index = draft.users.findIndex(user => user.id === action.id);
                draft.users.splice(index, 1);
            });
        default:
            return state;
    }
}

export const UserDispatch = React.createContext(null);

function App() {
    const [{ username, email }, onChange, onReset] = useInputs({
        username: '',
        email: ''
    });

    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);

    const { users } = state;

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
        onReset();
    }, [username, email, onReset]);

    const userCount = useMemo(() => countActiveUsers(state.users), [state.users])

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <DynamicArrayVersion2 users={users} />
            <div>활성사용자 수 : {userCount}</div>
        </UserDispatch.Provider>
    );
}

export default App;