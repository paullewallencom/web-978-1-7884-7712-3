import './styles/myStyle.scss'
import rocketLanding from './images/rocketLanding.jpg'
import { printRandom } from './random'
import {keyboard} from './equipment'

console.log('Hello there123!')
console.log(rocketLanding)
printRandom()

console.log(keyboard())

const image = document.createElement("img");
image.setAttribute('src', rocketLanding)
document.getElementById('root').appendChild(image)
