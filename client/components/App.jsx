import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Cities from './Cities'
import Address from './Address'

const App = () => {
  return (
    <div>
    <h1>Address Book</h1>
    <Router>
      <div>
        <Route path='/' component={Cities} />
        <Route path='/list/:city' component={Address} />
      </div>
    </Router>
    </div>
  )
}

export default App
