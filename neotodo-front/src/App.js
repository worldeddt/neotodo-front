import './App.css';
import Todo from "./todo/Todo";
import Wrapper from "./common/Wrapper";
import Hitting from "./common/Hitting";
import Input from "./common/Input";
import UseRef from "./common/UseRef";
import DynamicArray from "./common/DynamicArray";
import DynamicArrayVersion2 from "./common/DynamicArrayVersion2";
import {useEffect, useMemo, useRef, useState, useCallback} from "react";
import CreateUser from "./common/CreateUser";
import CreateReservation from "./common/CreateReservation";
import DynamicArrayReservation from "./common/DynamicArrayReservation";

function countActiveUsers(users) {
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

    const [reservationInputs, setReservationInputs] = useState({
        person: '',
        startDate: '',
        endDate:''
    });

    const enter = e => {
        if (e.keyCode === 13) {
            onCreate();
        }
    }

    const { username, email } = inputs;

    const { person, startDate, endDate } = reservationInputs;

    const [reservations, setReservations] = useState([
        {
            reservationNumber : 123,
            person: "박평식",
            startDate : "2023-09-22",
            endDate : "2023-09-23"
        },
        {
            reservationNumber : 124,
            person : "최판석",
            startDate : "2023-09-24",
            endDate : "2023-09-25"
        },
        {
            reservationNumber : 125,
            person : "김수용",
            startDate : "2023-09-26",
            endDate : "2023-09-27"
        }
    ]);

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

    useEffect((enter) => {
        return () => {
            console.log(...users);
        }

    }, [users]);

    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    });

    const onReservationChange = e => {
        const {name, value} = e.target;
        setReservationInputs({
            ...reservationInputs,
            [name]: value
        });
    };

    const onReservationDateChange = (e) => {
        const { person, startDate, endDate } = reservationInputs;

        setReservationInputs({
            ...reservationInputs,
            person,
            startDate,
            endDate
        });
    };

    const nextId = useRef(4);
    const reservationId  = useRef(126)

    const createReserv = () => {
        const reservation = {
            reservationNumber : reservationId.current,
            person,
            startDate,
            endDate
        }

        setReservations([...reservations, reservation]);

        setReservationInputs({
            person:"",
            startDate:"",
            endDate:""
        });

        reservationId.current += 1;
    }

    const onCreate = useCallback(() => {
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
    }, [users, username, email]);

    const onRemove = useCallback(id => {
        setUsers(users.filter(user => user.id !== id));
    }, [users]);

    const onRemoveReservation = (reservationNumber) => {
        setReservations(reservations.filter(reservation => reservation.reservationNumber !== reservationNumber));
    }

    const onToggle = useCallback(id => {
        setUsers(
            users.map(user =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    }, [users]);

    // const count = countActiveUsers(users);
    const count = useMemo(() => countActiveUsers(users), [users]);
    const nullEmailUser = confirmNullOfEmailUser(users);

  return (
      <Wrapper>
          {/*<CreateReservation*/}
          {/*    person={person}*/}
          {/*    startDate={startDate}*/}
          {/*    endDate={endDate}*/}
          {/*    onCreate={createReserv}*/}
          {/*    onChange={onReservationChange}*/}
          {/*    onReservationChange = {onReservationDateChange}*/}
          {/*/>*/}
          {/*<DynamicArrayReservation reservations={reservations} onRemove={onRemoveReservation}/>*/}
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
