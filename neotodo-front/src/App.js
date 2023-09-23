import './App.css';
import Todo from "./todo/Todo";
import Wrapper from "./common/Wrapper";

function App() {
  return (
      <Wrapper>
          <Todo isAdmin="Y"/>
          <Todo isAdmin="N"/>
      </Wrapper>
  );
}

export default App;
