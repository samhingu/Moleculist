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


class BlogList extends Component {
    _onArticleClick(){
        console.log('more called');
    }
    render() {
        return (
            <Tiles size="large" colorIndex="light-2" fill={true} selectable={true}>
                <Card onClick={this._onArticleClick} label="This is Label" heading="Thisis heading" description="this is Descrpition">
                    <Heading tag="h2">
                        Protect Your Digital Enterprise ipsum lorem dolores aeat el
                    </Heading>
                    <Box align="end">
                        <SocialTwitter />
                    </Box>
                </Card>
                <Card label="Featured Post" link={<Anchor href="http://grommet.github.io" label="Learn More" icon={<LinkNext />} />}>
                    <Heading tag="h2">
                        Protect Your Digital Enterprise ipsum lorem dolores aeat el
                    </Heading>
                </Card>
                <Card label="Social">
                    <Heading tag="h2">
                        Protect Your Digital Enterprise ipsum lorem dolores aeat el
                    </Heading>
                    <Box align="end">
                        <SocialFacebook />
                    </Box>
                </Card>
                <Card label="Social">
                    <Heading tag="h2">
                        Protect Your Digital Enterprise ipsum lorem dolores aeat el
                    </Heading>
                    <Box align="end">
                        <SocialLinkedin />
                    </Box>
                </Card>
                <Card label="Social">
                    <Heading tag="h2">
                        Protect Your Digital Enterprise ipsum lorem dolores aeat el
                    </Heading>
                    <Box align="end">
                        <SocialLinkedin />
                    </Box>
                </Card>
            </Tiles>
        );
    }
}

export default BlogList