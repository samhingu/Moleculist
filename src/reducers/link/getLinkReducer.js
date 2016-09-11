import {
    GET_LINKS_ERROR,
    GET_LINKS_SUCCESS,
    GET_LINKS_REQUEST
} from '../../constants/actionTypes'

import objectAssign from 'object-assign'

export const getLinksData = (state = { links: [], pageIndex: 0, pageSize: 10, totalCount: -1 }, action) => {
    switch (action.type) {
        case GET_LINKS_SUCCESS:
            return objectAssign({}, state, {
                links: [...state.links, ...action.payload.links],
                pageIndex: ++action.payload.pageIndex,
                totalCount: action.payload.totalCount
            })

        default:
            return state
    }
}

export const getLinksState = (state = { isLoading: false, errorMessage: null }, action) => {
    switch (action.type) {
        case GET_LINKS_REQUEST:
            return { isLoading: true, errorMessage: null }
        case GET_LINKS_SUCCESS:
            return { isLoading: false, errorMessage: null }
        case GET_LINKS_ERROR:
            return { isLoading: false, errorMessage: action.payload }

        default:
            return state
    }
}