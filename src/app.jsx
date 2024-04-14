import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Définissez vos composants Home, About et Contact
function Home(
) {
  return <h2>Home</h2>;
}
function About(
) {
  return <h2>About</h2>;
}
function Contact(
) {
  return <h2>Contact</h2>;
}

function App(
) {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* L'animation d'entrée/sortie se produit ici */}
        <TransitionGroup>
          <CSSTransition
            in={location.pathname === "/about"}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <Routes>
              <Route path="/about" element={<About />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </BrowserRouter>
  );
}

export default App;
