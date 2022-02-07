import React from 'react';
import '../imgeditor/imgeditor.styles.scss';

import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';

import {connect} from "react-redux";
import {invokeImageEditor, invokeImagePreview} from "../../redux/images/images.actions";

class ImgEditor extends React.Component {


    hideEditor(){
        this.props.invokeImageEditor(false);
        this.props.invokeImagePreview(true);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render(){

        return(
            <div className={`editor${this.props.imageEditor ? "" : "-hidden"}`}>
                <div className="close-editor-btn-wrapper">
                    <button type="button" className="btn btn-dark"
                            onClick={() => this.hideEditor()}>CLOSE EDITOR
                    </button>
                </div>
                <ImageEditor
                    includeUI={{
                        loadImage: {
                            path: this.props.currentImage,
                            name: 'GeneratedImage',
                        },

                        menu: ['filter', 'crop', 'flip', 'rotate', 'text', 'resize'],
                        initMenu: 'filter',
                        uiSize: {
                            width: '1600px',
                            height: '1000px',
                        },
                        menuBarPosition: 'bottom',
                    }}
                    cssMaxHeight={768}
                    cssMaxWidth={1280}
                    selectionStyle={{
                        cornerSize: 20,
                        rotatingPointOffset: 70,
                    }}
                    usageStatistics={true}
                />

            </div>
        );

    }
}

const mapStateToProps = state => ({
    currentImage: state.image.currentImage,
    imageEditor: state.image.imageEditor,
});

const mapDispatchToProps = dispatch => ({
    invokeImageEditor: imageEditor => dispatch(invokeImageEditor(imageEditor)),
    invokeImagePreview: imagePreview => dispatch(invokeImagePreview(imagePreview)),
});



export default connect(mapStateToProps, mapDispatchToProps)(ImgEditor);