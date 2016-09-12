import React, {Component, PropTypes} from 'react'

import Layer from 'grommet/components/Layer'
import Article from 'grommet/components/Article'
import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Button from 'grommet/components/Button'
import Markdown from 'grommet/components/Markdown'

import EditIcon from 'grommet/components/icons/base/Edit'
import TrashIcon from 'grommet/components/icons/base/Trash'

class BlogPreview extends Component {
    render() {
        const { link, onEdit, onDelete, onClose } = this.props
        return (
            <Layer onClose={onClose.bind(this) } closer={true} flush={true}>
                <Article pad="medium" full={true}>
                    <Heading>
                        {link.title}
                    </Heading>
                    <Section>
                        <Button icon={<EditIcon />} label="Edit" onClick={onEdit.bind(this) } />
                        <Button icon={<TrashIcon />} label="Delete" onClick={onDelete.bind(this) } />
                        <Markdown content={link.title} />
                    </Section>
                </Article>
            </Layer>
        )
    }
}

BlogPreview.propTypes = {
    link: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export default BlogPreview