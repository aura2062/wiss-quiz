import './App.css';
import Welcome from './Welcome.jsx';


const username = "aura";

function App() {
  return (
    <div>
      <h1>Willkommen beim WISS-Quiz!</h1>
      <p>Hier wird bald unser Quiz starten.</p>
      <br />
      <br />
      <Welcome />
    </div>
  );
}

export default App;