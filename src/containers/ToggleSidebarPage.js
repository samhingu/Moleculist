import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions/toggleSidebarActions'
import ToggleSidebarComponent from '../components/toggleSidebarComponent'
import BlogEdit from '../components/BlogEdit'

class ToggleSidebarPage extends Component {
    renderBlogEditPage() {
        return <BlogEdit />
    }
    render() {
        let blogEditPage;
        let showSidebar = this.props.toggleSidebar.showSidebar
        if (showSidebar) {
            blogEditPage = this.renderBlogEditPage()
        }
        return (
            <div>
                <ToggleSidebarComponent
                    toggleSidebar={this.props.actions.toggleSidebarWithThunk}
                    showSidebar={showSidebar}
                    />
                {blogEditPage}
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

export default connect(mapStateToProps, mapDispatcherToProps)(ToggleSidebarPage);
































