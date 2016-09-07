import {
    ADD_LINK_REQUEST,
    ADD_LINK_SUCCESS,
    ADD_LINK_ERROR
} from '../../constants/actionTypes'

const addLinkState = (state = { isLoading: false, errorMessage: null }, action) => {
    switch (action.type) {
        case ADD_LINK_REQUEST:
            return { isLoading: true, errorMessage: null }
        case ADD_LINK_SUCCESS:
            return { isLoading: false, errorMessage: null }
        case ADD_LINK_ERROR:
            return { isLoading: false, errorMessage: action.payload }

        default:
            return state;
    }
}

export default addLinkState