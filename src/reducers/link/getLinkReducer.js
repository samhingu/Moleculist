import {
    GET_LINKS_ERROR,
    GET_LINKS_SUCCESS,
    GET_LINKS_REQUEST
} from '../../constants/actionTypes'

export const getLinksData = (state = [], action) => {
    switch (action.type) {
        case GET_LINKS_SUCCESS:
            return action.payload

        default:
            return state;
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
            return state;
    }
}