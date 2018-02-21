import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import addressBook from '../../data/addressBook.js'

const showCities = (addressBook) => {
  return Object.keys(addressBook).map((city, key) => {
    return <li key={key}><Link to={'/list' + city}>{city}</Link></li>
  })
}

export default function(props) {
  return (
    <div className="nav container">
      <h1> List of Cities </h1>
      <ul>
        {showCities(addressBook)}
      </ul>
    </div>
  )
}
