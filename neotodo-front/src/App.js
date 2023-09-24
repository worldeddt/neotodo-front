import './App.css';
import Todo from "./todo/Todo";
import Wrapper from "./common/Wrapper";
import Hitting from "./common/Hitting";
import Input from "./common/Input";
import UseRef from "./common/UseRef";
import DynamicArray from "./common/DynamicArray";
import DynamicArrayVersion2 from "./common/DynamicArrayVersion2";
import {useEffect, useMemo, useRef, useState} from "react";
import CreateUser from "./common/CreateUser";

function countActiveUsers(users) {
    console.log("사람 수 카운트 호출");
    return users.filter(user => user.active).length;
}

function confirmNullOfEmailUser(users) {
    return users.filter(user => user.email === null || user.email === "" || user.email === undefined).length;
}

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });

    const enter = e => {
        if (e.keyCode === 13) {
            onCreate();
        }
    }

    useEffect((enter) => {

    }, []);

    const { username, email } = inputs;

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active :true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active : true
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active :true
        }
    ]);

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const nextId = useRef(4);

    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email,
            active : true
        }

        setUsers([...users, user]);

        setInputs({
            username : "",
            email : ""
        });

        nextId.current += 1;
    }

    const onRemove = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }

    const onToggle = id => {
        setUsers(
            users.map(user =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    };

    // const count = countActiveUsers(users);
    const count = useMemo(() => countActiveUsers(users), [users]);
    const nullEmailUser = confirmNullOfEmailUser(users);
  return (
      <Wrapper>
          {/*<Hitting/>*/}
          {/*<Todo isAdmin="Y"/>*/}
          {/*<Todo isAdmin="N"/>*/}
          {/*<Input/>*/}
          {/*<UseRef/>*/}

          {/*<DynamicArray/>*/}
          <CreateUser
              username={username}
              email={email}
              onChange={onChange}
              onCreate={onCreate}
              onkeyup = {enter}
          />
          <DynamicArrayVersion2 users = {users} onRemove = {onRemove} onToggle = {onToggle}/>
          <div>활성사용자 수 : {count}</div>
          <div>이메일 안적은 사람 수 : {nullEmailUser}</div>
      </Wrapper>
  );
}

export default App;
