import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Content from './pages/Content';
import About from './pages/About';
import Comment from './pages/Comment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Comments</h1>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/content">Content</a>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/content">
            <Content />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/comment/:id">
            <Comment />
          </Route>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
