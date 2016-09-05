import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import HomePage from './components/HomePage'
import BlogList from './components/BlogList'
import ToggleSidebarPage from './containers/ToggleSidebarPage'
import NotFoundPage from './components/NotFoundPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/Blog" component={BlogList} />
        <Route path="/Toggle" component={ToggleSidebarPage} />
        <Route path="*" component={NotFoundPage} />
    </Route>
)