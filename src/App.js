import { signInUser } from './api/user.api'
import './App.css';

function App(){
  return (
    <div className="App">
      <button onClick={() => signInUser()}>click</button>
    </div>
  );
}
export default App;
