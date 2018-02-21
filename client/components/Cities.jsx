import React from 'react'
import addressBook from '../../data/addressBook.js'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

const showCities = (addressBook) => {
  return Object.keys(addressBook).map((city, i) => {
    return <li key={i}><Link to={'/list/' + city}>{city}</Link></li>
  })
}

export default function(props) {
  return (
    <div>
      <h3>Pick up city to find the address</h3>
      <ul>
        {showCities(addressBook)}
      </ul>
    </div>
  )
}
