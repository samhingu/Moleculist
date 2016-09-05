import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import toggleSidebarReducer from './toggleSidebarReducer'

const rootReducer = combineReducers({
    toggleSidebar: toggleSidebarReducer,
    routing: routerReducer
})

export default rootReducer