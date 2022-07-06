import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Content from './pages/Content';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h2>Articles</h2>
        </nav>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/content">
          <Content />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
