import logo from './logo.svg';
import './App.css';
import Check1 from './components/Check1';
import Users from './components/Users';
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
      <h1> UseEffect Hook</h1>
      {/* <Check1 /> */}
      {/* <Users /> */}
      <Parent name="JohnDoe" location="Connecticut"/>
    </div>
  );
}

export default App;
