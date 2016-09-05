import * as types from '../constants/actionTypes'
export function toggleSidebar(showSidebar) {
    return {
        type: types.TOGGLE_SIDEBAR,
        showSidebar: !showSidebar
    }
}

export function toggleSidebarWithThunk(showSidebar) {
    return function (dispatch) {
        return dispatch({
            type: types.TOGGLE_SIDEBAR,
            showSidebar: !showSidebar
        })
    }
}