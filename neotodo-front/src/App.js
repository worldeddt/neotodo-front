import './App.css';
import Todo from "./todo/Todo";
import Wrapper from "./common/Wrapper";
import Hitting from "./common/Hitting";
import Input from "./common/Input";
import UseRef from "./common/UseRef";

function App() {
  return (
      <Wrapper>
          <Hitting/>
          <Todo isAdmin="Y"/>
          <Todo isAdmin="N"/>
          <Input/>
          <UseRef/>
      </Wrapper>
  );
}

export default App;
