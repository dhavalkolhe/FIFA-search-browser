import Home from './Home'
import Profile from './Profile';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
          <Switch>
            {/* Home Page */}
            <Route path="/" exact component={Home}/>

            {/* Profile Page */}
            <Route path="/profile" component={Profile}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
