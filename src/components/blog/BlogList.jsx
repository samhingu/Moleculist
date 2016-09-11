import React, {Component, PropTypes} from 'react'

import Tiles from 'grommet/components/Tiles'
import Card from 'grommet/components/Card'
import Box from 'grommet/components/Box'
import Button  from 'grommet/components/Button'
import Timestamp  from 'grommet/components/Timestamp'
import ChapterAddIcon from 'grommet/components/icons/base/ChapterAdd'

import { NotifyError } from '../common/Notify'

class BlogList extends Component {
    _renderBlogItem(link) {
        const {_id, title, body, createdOn} = link
        return (
            <Card key={_id} label={title} heading={title} description={body}
                onClick={this.props.onBlogClick.bind(this, link) }>
                <Timestamp value={createdOn} />
            </Card>
        )
    }
    _renderBlogList() {
        return (
            <Tiles size="large" colorIndex="light-2" fill={true} selectable={true}
                onMore={this.props.loadLinks.bind(this) }>
                { this.props.links.map(this._renderBlogItem.bind(this)) }
            </Tiles>
        )
    }
    render() {
        const { errorMessage, onAddBlogClick } = this.props

        return (
            <div>
                {/* Header Panel  */}
                <Box align="center" justify="center" pad="small">
                    <Button label="Add" icon={<ChapterAddIcon />}
                        onClick={onAddBlogClick.bind(this) } />
                </Box>

                {/* Show Error  */}
                <NotifyError title="Error loading blogs" message={errorMessage} />

                {/* Blog List */}
                { !!errorMessage || this._renderBlogList() }
            </div>
        )
    }
}

BlogList.propTypes = {
    errorMessage: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
    loadLinks: PropTypes.func.isRequired,
    onAddBlogClick: PropTypes.func.isRequired,
    onBlogClick: PropTypes.func.isRequired
};

export default BlogList