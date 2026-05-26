import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="App-nav">
            <Link to="/">Home</Link>
            <Link to="/quiz">Quiz</Link>
        </nav>
    )
}

export default Navigation;