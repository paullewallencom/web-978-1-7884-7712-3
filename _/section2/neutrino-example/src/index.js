import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash'

console.log(_.random(1, 50))
render(<h1>Hello world!</h1>, document.getElementById('root'));
