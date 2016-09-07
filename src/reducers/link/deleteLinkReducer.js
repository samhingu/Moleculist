import {
    DELETE_LINK_REQUEST,
    DELETE_LINK_SUCCESS,
    DELETE_LINK_ERROR
} from '../../constants/actionTypes'

const deleteLinkState = (state = { isLoading: false, errorMessage: null }, action) => {
    switch (action.type) {
        case DELETE_LINK_REQUEST:
            return { isLoading: true, errorMessage: null }
        case DELETE_LINK_SUCCESS:
            return { isLoading: false, errorMessage: null }
        case DELETE_LINK_ERROR:
            return { isLoading: false, errorMessage: action.payload }

        default:
            return state;
    }
}

export default deleteLinkState