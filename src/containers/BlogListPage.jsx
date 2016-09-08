import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions/linkActions'
import BlogList from '../components/blog/BlogList'
import BlogAddEdit from '../components/blog/BlogAddEdit'

class BlogListPage extends Component {
    onBlogClick(link) {
        this.props.actions.editLink(link)
    }
    onLoadLink() {
        this.props.actions.getLinks()
    }
    onClose() {
        this.props.actions.editLinkCancel()
    }
    onSubmit() {
        alert('onSubmit Called')
    }

    _renderAddEditBlogPage(link) {
        return (
            <BlogAddEdit
                saving={false}
                onClose={this.onClose.bind(this) }
                onSubmit={this.onSubmit.bind(this) }
                isAdd={!link._id} link={link}  />
        )
    }
    render() {
        var addEditBlog
        if (this.props.saveLinkData._id) {
            addEditBlog = this._renderAddEditBlogPage(this.props.saveLinkData)
        }
        return (
            <div>
                {addEditBlog}
                <BlogList
                    isLoading={this.props.status.isLoading}
                    errorMessage={this.props.status.errorMessage}
                    links={this.props.links}
                    loadLinks={this.onLoadLink.bind(this) }
                    onBlogClick={this.onBlogClick.bind(this) }
                    />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        links: state.getLinksData,
        status: state.getLinksState,
        saveLinkData: state.saveLinkData,
        saveLinkStatus: state.saveLinkStatus
    }
}

function mapDispatcherToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(BlogListPage);
































