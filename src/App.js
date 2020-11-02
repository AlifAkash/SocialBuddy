import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import NotMatch from './Components/NotMatch/NotMatch';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route path="/post/:postsId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
