import React, {Component} from 'react'

import Tiles from 'grommet/components/Tiles'
import Card from 'grommet/components/Card'
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'
import Anchor  from 'grommet/components/Anchor'
import SocialFacebook from 'grommet/components/icons/base/SocialFacebook'
import SocialLinkedin  from 'grommet/components/icons/base/SocialLinkedin'
import SocialTwitter from 'grommet/components/icons/base/SocialTwitter'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import Spinning from 'grommet/components/icons/Spinning'

import {NotifyError, NotifyLoading} from '../common/Notify'

class BlogList extends Component {
    componentDidMount() {
        this.props.loadLinks()
    }

    _onArticleClick(link) {
        this.props.onBlogClick(link);
    }
    _renderBlogItem(link) {
        return (
            <Card key={link._id} onClick={this._onArticleClick.bind(this, link) }
                label={link.title}
                heading={link.title}
                description={link.body}>
                <Heading tag="h2">
                    {link.body}
                </Heading>
                <Box align="end">
                    <SocialTwitter />
                </Box>
            </Card>
        )
    }
    _renderBlogList(links) {
        return (
            <Tiles size="large" colorIndex="light-2" fill={true} selectable={true}>
                {links.map(this._renderBlogItem.bind(this)) }
            </Tiles>
        )
    }
    render() {
        let { isLoading, errorMessage, links } = this.props

        return (
            <div>
                <NotifyLoading loading={isLoading} message="Blogs"  />
                <NotifyError title="Error getting blogs" message={errorMessage} />
                { errorMessage || this._renderBlogList(links) }
            </div>
        )
    }
}

export default BlogList