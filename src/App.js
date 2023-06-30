import DataCall from "./components/DataCall";
import UserList from "./components/UserList";


function App() {
  return (
    <div className="App">
        <h2>Redux-Toolkit</h2>
        <div>
          <UserList/>
        </div>

        <div>
          <DataCall/>
        </div>
    </div>
  );
}

export default App;
