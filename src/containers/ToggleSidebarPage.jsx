import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions/toggleSidebarActions'
import ToggleSidebarComponent from '../components/ToggleSidebarComponent'

class ToggleSidebarPage extends Component {
    render() {
        return (
            <div>
                <ToggleSidebarComponent
                    toggleSidebar={this.props.actions.toggleSidebarWithThunk}
                    showSidebar={<this className="props toggleSidebar showSidebar"></this>}
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