import React, {Component} from 'react';
import LayerForm from 'grommet-templates/components/LayerForm'


class BlogEdit extends Component {
    render() {
        return (
            <LayerForm 
            title="Title goes here"
            submitLabel="Submit Label">
            Hello World From LayerForm
            </LayerForm>
        );
    }
}

export default BlogEdit;