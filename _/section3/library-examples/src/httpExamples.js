import request from 'superagent-es6-promise'

fetch('https://maps.googleapis.com/maps/api/geocode/json?address=san%20fran&sensor=false')
  .then((response) => response.json())
  .then((x) => console.log(x))

request.get('https://maps.googleapis.com/maps/api/geocode/json?address=san%20fran&sensor=false')
  .then((response) => console.log(response.body))
