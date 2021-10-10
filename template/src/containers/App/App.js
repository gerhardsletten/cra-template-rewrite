import loadable from '@loadable/component'
import { Route, Switch } from 'react-router-dom'

const HomePage = loadable(() =>
  import(/* webpackChunkName: "HomePage" */ '../HomePage/HomePage')
)

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  )
}

export default App
