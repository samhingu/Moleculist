import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions/linkActions'
import BlogList from '../components/BlogList'

class BlogListPage extends Component {
    onBlogClick(link) {
        alert(link.title)
    }
    onLoadLink() {
        this.props.actions.getLinks();
    }
    render() {
        return (
            <BlogList
                isLoading={this.props.status.isLoading}
                errorMessage={this.props.status.errorMessage}
                links={this.props.links}
                loadLinks={this.onLoadLink.bind(this) }
                onBlogClick={this.onBlogClick.bind(this) }
                />
        )
    }
}

function mapStateToProps(state) {
    return {
        links: state.getLinksData,
        status: state.getLinksState
    }
}

function mapDispatcherToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(BlogListPage);
































