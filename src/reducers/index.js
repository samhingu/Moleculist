import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import toggleSidebarReducer from './toggleSidebarReducer'
import linkReducer from './link'

const rootReducer = combineReducers({
    toggleSidebar: toggleSidebarReducer,
    routing: routerReducer,
    ...linkReducer
})

export default rootReducer