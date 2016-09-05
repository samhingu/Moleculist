import { TOGGLE_SIDEBAR } from '../constants/actionTypes'

import objectAssign from 'object-assign'

export default function toggleSidebarReducer(state = { showSidebar: false }, action) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return objectAssign({}, state, { showSidebar: action.showSidebar });

        default:
            return state;
    }
}