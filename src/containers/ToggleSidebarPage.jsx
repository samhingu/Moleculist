import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions/toggleSidebarActions'
import ToggleSidebarComponent from '../components/common/ToggleSidebarComponent'

class ToggleSidebarPage extends Component {
    render() {
        return (
            <div>
                <ToggleSidebarComponent
                    toggleSidebar={this.props.actions.toggleSidebarWithThunk}
                    showSidebar={this.props.toggleSidebar.showSidebar}
                    />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        toggleSidebar: state.toggleSidebar
    }
}

function mapDispatcherToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(ToggleSidebarPage)