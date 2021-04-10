import { Route, Switch } from 'react-router-dom'

import './App.css'
import Home from './Screens/Home'
import Inspect from './Screens/Inspect'
import Duel from './Screens/Duel'

const App = () => (
  <Switch>
    <Route path='/inspect' component={Inspect} />
    <Route path='/duel' component={Duel} />
    <Route path='/' component={Home} />
  </Switch>
)

export default App;
