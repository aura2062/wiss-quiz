import './App.css';
import Welcome from './Welcome.jsx';
import Footer from './Footer.jsx';
import Counter from './Counter.jsx';

function App() {
  return (
    <div>
      <h1>Willkommen beim WISS-Quiz!</h1>
      <p>Hier wird bald unser Quiz starten.</p>
      <br />
      <br />
      <Welcome />
      <br />
      <Counter />
      <br />
      <Footer />
    </div>
  );
}

export default App;