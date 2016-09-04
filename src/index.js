//import styles
import 'grommet/scss/vanilla/index'
import './style'

import React from 'react'
import {render} from 'react-dom'

import App from './components/App'

render(<App />, document.getElementById('content'))

document.body.classList.remove('loading');