## Video 2
```
# Create random.js with

import _ from 'lodash'

export const printRandom = () => console.log(_.random(1, 100))


# index.js

import { printRandom } from './random'

```

## Video 3
```

#create styles/myStyle.scss

# Add

p {
  font-size: 40px;
}

# Add

.really-big {
  font-size: 80px;
}

# Modify indexTemplate.html

`class="really-big"`

```

## Video 4

```
import rocketLanding from './images/rocketLanding.jpg'
console.log(rocketLanding)

# Then add
const image = document.createElement("img");
image.setAttribute('src', rocketLanding)
document.getElementById('root').appendChild(image)

```


## Video 5

`npm run build`

`npm install http-server -g`

`cd static`

`http-server`

`open http://localhost:8080`

## Video 7

```
# Create equipment.js with:

export const keyboard = () => 'keyboard'

export const mouse = () => 'mouse'


# then

import {keyboard} from './equipment'

console.log(keyboard())
```

