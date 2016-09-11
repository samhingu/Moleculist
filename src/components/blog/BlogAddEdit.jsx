import React, {Component, PropTypes} from 'react'
import objectAssign from 'object-assign'

import LayerForm from 'grommet-templates/components/LayerForm'
import FormFields from 'grommet/components/FormFields'
import FormField from 'grommet/components/FormField'

class BlogAddEdit extends Component {
    onSubmit() {
        const link = objectAssign({}, this.props.link, { title: this.refs.titleInput.value, body: this.refs.bodyInput.value })
        this.props.onSubmit(link)
    }
    render() {
        const {isAdd, link, saving, onClose } = this.props;
        return (
            <LayerForm
                busy={saving}
                onSubmit={this.onSubmit.bind(this) }
                onClose={onClose.bind(this) }
                title={isAdd ? "Add Blog" : "Update Blog"}
                submitLabel={isAdd ? "Add" : "Update"}>
                <FormFields>
                    <fieldset>
                        <FormField label="Title" htmlFor="titleInput">
                            <input id="titleInput" name="title" type="text" ref="titleInput" defaultValue={link.title} />
                        </FormField>
                        <FormField label="Body" htmlFor="bodyInput">
                            <textarea id="bodyInput" name="body" ref="bodyInput" defaultValue={link.body} />
                        </FormField>
                    </fieldset>
                </FormFields>
            </LayerForm>
        );
    }
}

BlogAddEdit.propTypes = {
    isAdd: PropTypes.bool.isRequired,
    link: PropTypes.object.isRequired,
    saving: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export default BlogAddEdit