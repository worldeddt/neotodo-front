import './App.css';
import Todo from "./todo/Todo";
import Wrapper from "./common/Wrapper";
import Hitting from "./common/Hitting";
import Input from "./common/Input";
import UseRef from "./common/UseRef";
import DynamicArray from "./common/DynamicArray";

function App() {
  return (
      <Wrapper>
          <Hitting/>
          <Todo isAdmin="Y"/>
          <Todo isAdmin="N"/>
          <Input/>
          <UseRef/>

          <DynamicArray/>
      </Wrapper>
  );
}

export default App;
