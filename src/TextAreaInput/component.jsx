import Element from './index';
import BaseComponent from '../BaseComponent/index.jsx';

class TextAreaInput extends BaseComponent {
    constructor(props) {
        super(props);
        this.elementClass = Element;
    }

    render() {
        return super.render();
    }
}

TextAreaInput.propTypes = {};
TextAreaInput.ctor = Element;
TextAreaInput.defaultProps = {
};

export default TextAreaInput;
