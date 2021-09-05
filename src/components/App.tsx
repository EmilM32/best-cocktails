import { Topbar } from './Topbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Category } from '../pages/Category'
import { Cocktail } from '../pages/Cocktail'
import { SearchResult } from '../pages/SearchResult'

const App = () => {
  return (
    <Router>
      <div className="sm:pb-24 pb-32">
        <Topbar />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category/:title">
          <Category />
        </Route>
        <Route path="/cocktail/:id">
          <Cocktail />
        </Route>
        <Route path="/search-result/:search">
          <SearchResult />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
