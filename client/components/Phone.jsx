import React from 'react'
import addressBook from '../../data/addressBook.js'
import {HashRouter as Router, Route} from 'react-router-dom'

const showPhone = (city, name) => {
  let singleAddress = addressBook[city].find(function(elem) {
    return (elem.name === name)
  })
  
return (
  <div>
    <p>{singleAddress.phone}</p>
  </div>
)
}

export default function (props) {
  var city = props.match.params.city
  var name = props.match.params.name

  return (
    <div>
      {showPhone(city, name)}
    </div>
  )
}
