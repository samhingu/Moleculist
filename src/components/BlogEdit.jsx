import React, {Component} from 'react';

import LayerForm from 'grommet-templates/components/LayerForm'
import FormFields from 'grommet/components/FormFields'
import FormField from 'grommet/components/FormField'

class BlogEdit extends Component {
    _onClose() {
        this.props.onClose();
    }
    _onSubmit() {
    }
    render() {
        return (
            <LayerForm onSubmit={this._onSubmit.bind(this) }
                onClose={this._onClose.bind(this) }
                title="Title goes here"
                submitLabel="Submit Label">
                <FormFields>
                    <fieldset>
                        <FormField label="Title" htmlFor="titleInput">
                            <input id="titleInput" name="title" type="text" ref="titleInput" />
                        </FormField>
                    </fieldset>
                </FormFields>
            </LayerForm>
        );
    }
}

export default BlogEdit;