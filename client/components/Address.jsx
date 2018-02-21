import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import addressBook from '../../data/addressBook.js'
import {Link} from 'react-router-dom'

const showAddresses = (city) => {
  const names = addressBook[city]
  return names.map((nameAndAddress, i) => {
    return <li key={i}><Link to={'/city' + city + '/' + nameAndAddress.name}><ul>{nameAndAddress.name} {nameAndAddress.address}</ul></Link></li>
  })
}

export default function (props) {
  var city = props.match.params.city
  return (
    <div>
<ul>
{showAddresses(city)}
</ul>
    </div>
  )
}
