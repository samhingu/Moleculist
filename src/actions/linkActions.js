import { createAction } from "redux-actions"

import * as ActionTypes from "../constants/actionTypes"
import { apiGetLinks, apiDeleteLink, apiSaveLink } from "../apis/fetch"

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

const editLink = createAction(ActionTypes.EDIT_LINK)
const editLinkCancel = createAction(ActionTypes.EDIT_LINK_CANCEL)

const saveLinkRequest = createAction(ActionTypes.SAVE_LINK_REQUEST)
const saveLinkError = createAction(ActionTypes.SAVE_LINK_ERROR)
const saveLinkSuccess = createAction(ActionTypes.SAVE_LINK_SUCCESS)

const saveLink = (link) => (dispatch) => {
    dispatch(saveLinkRequest())
    apiSaveLink(link,
        () => dispatch(saveLinkSuccess()),
        (errorMessage) => dispatch(saveLinkError(errorMessage))
    )
}



export { getLinks, deleteLink, saveLink, editLink, editLinkCancel }
