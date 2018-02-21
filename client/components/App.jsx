import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Cities from './Cities'
import Address from './Address'
import Phone from './Phone'

const App = () => {
  return (
    <div>
    <h1>Address Book</h1>
    <Router>
      <div>
        <Route path='/' component={Cities} />
        <Route path='/list/:city' component={Address} />
        <Route path='/list/:city/:name' component={Phone} />
      </div>
    </Router>
    </div>
  )
}

export default App
