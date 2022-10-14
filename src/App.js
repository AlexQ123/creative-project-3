import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Add from './Add';
import Subtract from './Subtract';

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/add":
      Component = Add
      break
    case "/subtract":
      Component = Subtract
      break
  }
  return (
    <div>
      <Navbar />
      <Component />
    </div>
  );
}

export default App;
