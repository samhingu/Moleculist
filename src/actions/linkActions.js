import { createAction } from "redux-actions"

import * as ActionTypes from "../constants/actionTypes"
import { apiGetLinks, apiDeleteLink, apiAddLink } from "../apis/fetch"

const getLinksRequest = createAction(ActionTypes.GET_LINKS_REQUEST)
const getLinksError = createAction(ActionTypes.GET_LINKS_ERROR)
const getLinksSuccess = createAction(ActionTypes.GET_LINKS_SUCCESS)

const getLinks = () => (dispatch) => {
    dispatch(getLinksRequest())
    apiGetLinks(
        (links) => dispatch(getLinksSuccess(links)),
        (errorMessage) => dispatch(getLinksError(errorMessage))
    )
}

const deleteLinkRequest = createAction(ActionTypes.DELETE_LINK_REQUEST)
const deleteLinkError = createAction(ActionTypes.DELETE_LINK_ERROR)
const deleteLinkSuccess = createAction(ActionTypes.DELETE_LINK_SUCCESS)

const deleteLink = (linkId) => (dispatch) => {
    dispatch(deleteLinkRequest(linkId))
    apiDeleteLink(linkId,
        () => dispatch(deleteLinkSuccess()),
        (errorMessage) => dispatch(deleteLinkError(errorMessage))
    )
}


const addLinkRequest = createAction(ActionTypes.ADD_LINK_REQUEST)
const addLinkError = createAction(ActionTypes.ADD_LINK_ERROR)
const addLinkSuccess = createAction(ActionTypes.ADD_LINK_SUCCESS)

const addLink = (link) => (dispatch) => {
    dispatch(addLinkRequest())
    apiAddLink(link,
        () => dispatch(addLinkSuccess()),
        (errorMessage) => dispatch(addLinkError(errorMessage))
    )
}



export { getLinks, deleteLink, addLink }
