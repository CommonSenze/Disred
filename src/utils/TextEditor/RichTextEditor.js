import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";

class RichTextEditor extends Component {
    render() {
        const editor = ClassicEditor;
        return (
            <CKEditor
                    editor={editor}
                    data={this.props.value}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        this.props.onChange(data);
                    }}
                />
        );
    }
}

export default RichTextEditor;

RichTextEditor.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};
