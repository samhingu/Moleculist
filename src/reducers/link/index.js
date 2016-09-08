
import { saveLinkState, saveLinkData } from './saveLinkReducer'
import {getLinksState, getLinksData} from './getLinkReducer'
import deleteLinkState from './deleteLinkReducer'

export default {
    getLinksData,
    getLinksState,
    saveLinkData,
    saveLinkState,
    deleteLinkState
}