import './App.css';
import Todo from "./todo/Todo";
import Wrapper from "./common/Wrapper";
import Hitting from "./common/Hitting";
import Input from "./common/Input";
import UseRef from "./common/UseRef";
import DynamicArray from "./common/DynamicArray";
import DynamicArrayVersion2 from "./common/DynamicArrayVersion2";
import {useEffect, useRef, useState} from "react";
import CreateUser from "./common/CreateUser";

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

        console.log(nextId);
        const user = {
            id: nextId.current,
            username,
            email
        }

        setUsers([...users, user]);

        setInputs({
            username : "",
            email : ""
        });

        nextId.current += 1;
    }

    const onRemove = (id) => {
        console.log(id);
        setUsers(users.filter(user => user.id !== id));
    }


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
          <DynamicArrayVersion2 users = {users} onRemove = {onRemove}/>
      </Wrapper>
  );
}

export default App;
