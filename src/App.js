import { useNavigate } from "react-router-dom";
import "./button.css";

function App() {

  const nav = useNavigate();

  function handleCreateAccount()
  {
    nav("/create");
  }

  function handleLogin()
  {
    nav("/login");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Garage sales application 🎉
        </h1>
        <button onClick={handleLogin} className="login">
          Login
        </button>
        <button onClick={handleCreateAccount} className="create">
          Create Account
        </button>
      </header>
    </div>
  );
}

export default App;
