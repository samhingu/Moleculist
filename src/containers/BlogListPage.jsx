import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions/linkActions'
import BlogList from '../components/blog/BlogList'
import BlogAddEdit from '../components/blog/BlogAddEdit'

class BlogListPage extends Component {
    _onBlogClick(link) {
        this.props.actions.editLink(link)
    }
    _onAddBlogClick() {
        this.props.actions.editLink({ title: 'My Title', body: 'My Body' });
    }
    _onLoadLinkClick() {
        if (!this.props.status.isLoading) {
            let pageIndex = this.props.linksData.pageIndex;
            this.props.actions.getLinks(pageIndex);
        }
    }
    _onSaveClose() {
        this.props.actions.editLinkCancel()
    }
    _onSaveLinkClick(link) {
        this.props.actions.saveLink(link);
    }

    _renderAddEditBlogPage(link, isSaving) {
        return (
            <BlogAddEdit
                saving={isSaving}
                onClose={this._onSaveClose.bind(this) }
                onSubmit={this._onSaveLinkClick.bind(this) }
                isAdd={!link._id}
                link={link}  />
        )
    }
    render() {
        const {saveLinkData, saveLinkState, status, linksData } = this.props;
        return (
            <div>
                {!!saveLinkData.title
                    && this._renderAddEditBlogPage(saveLinkData, saveLinkState.isLoading) }
                <BlogList
                    errorMessage={status.errorMessage}
                    links={linksData.links}
                    totalCount={linksData.totalCount}
                    loadLinks={this._onLoadLinkClick.bind(this) }
                    onBlogClick={this._onBlogClick.bind(this) }
                    onAddBlogClick={this._onAddBlogClick.bind(this) }
                    />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        linksData: state.getLinksData,
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
































