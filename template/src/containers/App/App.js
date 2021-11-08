import loadable from '@loadable/component'
import { Routes, Route } from 'react-router-dom'

const HomePage = loadable(() =>
  import(/* webpackChunkName: "HomePage" */ '../HomePage/HomePage')
)

const App = () => {
  return (
    <Routes>
      <Route path="/" element={HomePage} />
    </Routes>
  )
}

export default App
