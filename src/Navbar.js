export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="home-title">Home</a>
            <ul>
                <li><a href="/add">Add</a></li>
                <li><a href="/subtract">Subtract</a></li>
            </ul>
        </nav>
    );
}