
import { combineReudcers } from 'redux'

import addLinkState from './addLinkReducer'
import {getLinksState, getLinksData} from './getLinkReducer'
import deleteLinkState from './deleteLinkReducer'

export default { getLinksData, getLinksState, addLinkState, deleteLinkState }