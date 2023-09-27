import React from 'react';
import styled from 'styled-components';
import TodoItem from "./TodoItems";
import {useTodoState} from "./TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: #ffffff; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

function TodoList() {
    const todos = useTodoState();
    console.log(todos);

    return <TodoListBlock>
        {todos.map(todo =>
            (<TodoItem key = {todo.id} id={todo.id} text ={todo.text} done={todo.done}/>)
        )}
    </TodoListBlock>;
}

export default TodoList;