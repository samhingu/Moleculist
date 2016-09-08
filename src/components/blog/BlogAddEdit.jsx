import React, {Component} from 'react';

import LayerForm from 'grommet-templates/components/LayerForm'
import FormFields from 'grommet/components/FormFields'
import FormField from 'grommet/components/FormField'

class BlogAddEdit extends Component {
    render() {
        const {isAdd, link, saving, onSubmit, onClose } = this.props;
        return (
            <LayerForm
                busy={saving}
                onSubmit={onSubmit.bind(this) }
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

export default BlogAddEdit;