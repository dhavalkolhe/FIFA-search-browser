import Home from './Home'
import Profile from './Profile';
import Help from './Help';

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

            {/* temp Page */}
            <Route path="/help" component={Help}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
