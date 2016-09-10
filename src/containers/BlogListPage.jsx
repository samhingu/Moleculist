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
    onAddBlogClick() {
        this.props.actions.editLink({ title: 'My Title', body: 'My Body' });
    }
    onLoadLink() {
        this.props.actions.getLinks()
    }
    onClose() {
        this.props.actions.editLinkCancel()
    }
    onSubmit(link) {
        this.props.actions.saveLink(link);
    }

    _renderAddEditBlogPage(link, isSaving) {
        return (
            <BlogAddEdit
                saving={isSaving}
                onClose={this.onClose.bind(this) }
                onSubmit={this.onSubmit.bind(this) }
                isAdd={!link._id} link={link}  />
        )
    }
    render() {
        var addEditBlog
        if (this.props.saveLinkData.title) {
            addEditBlog = this._renderAddEditBlogPage(this.props.saveLinkData, this.props.saveLinkState.isLoading)
        }
        return (
            <div>
                {addEditBlog}
                <BlogList
                    saving={this.props.saveLinkState.isLoading}
                    isLoading={this.props.status.isLoading}
                    errorMessage={this.props.status.errorMessage}
                    links={this.props.links}
                    loadLinks={this.onLoadLink.bind(this) }
                    onBlogClick={this.onBlogClick.bind(this) }
                    onAddBlogClick={this.onAddBlogClick.bind(this) }
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
        saveLinkState: state.saveLinkState
    }
}

function mapDispatcherToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(BlogListPage);
































