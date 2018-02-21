import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Cities from './Cities'

const App = () => {
  return (
    <div>
    <h1>Address Book</h1>
    <Router>
      <div>
        <Route path='/' component={Cities} />
      </div>
    </Router>
    </div>
  )
}

export default App
