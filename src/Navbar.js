import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/creative-project-3/build/">Home</Link>
            <ul>
                <li><Link to="/creative-project-3/build/add">Add</Link></li>
                <li><Link to="/creative-project-3/build/subtract">Subtract</Link></li>
            </ul>
        </nav>
    );
}