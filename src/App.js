import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/content">Content</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={<Home />}>
            <Home />
          </Route>
          <Route path="/content" component={<Content />}>
            <Content />
          </Route>
          <Route path="/about" component={<About />}>
            <About />
          </Route>
          <Route path="/comment/:id" component={<Comment />}>
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
