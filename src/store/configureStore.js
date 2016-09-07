
import thunkMiddleware from 'redux-thunk'
import * as createLogger from 'redux-logger'
import { createStore, compose, applyMiddleware } from 'redux'

import rootReducer from '../reducers'

export default function configureStore(initialState) {
    const logger = createLogger.default({
        collapsed: true,
        level: 'info',
        duration: true
    })
    const middleware = [
        thunkMiddleware,
        logger
    ]

    return createStore(rootReducer, initialState,
        compose(applyMiddleware(...middleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f)
    )
}