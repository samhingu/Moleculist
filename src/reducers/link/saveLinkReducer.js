import {
    SAVE_LINK_REQUEST,
    SAVE_LINK_SUCCESS,
    SAVE_LINK_ERROR,
    EDIT_LINK,
    EDIT_LINK_CANCEL
} from '../../constants/actionTypes'


export const saveLinkData = (state = {}, action) => {
    switch (action.type) {
        case SAVE_LINK_SUCCESS:
        case EDIT_LINK_CANCEL:
            return {}

        case EDIT_LINK:
            return action.payload

        default:
            return state;
    }
}


export const saveLinkState = (state = { isLoading: false, errorMessage: null }, action) => {
    switch (action.type) {
        case SAVE_LINK_REQUEST:
            return { isLoading: true, errorMessage: null }
        case SAVE_LINK_SUCCESS:
            return { isLoading: false, errorMessage: null }
        case SAVE_LINK_ERROR:
            return { isLoading: false, errorMessage: action.payload }

        default:
            return state;
    }
}