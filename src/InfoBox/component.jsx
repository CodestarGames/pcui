import React from 'react';
import Element from './index';
import BaseComponent from '../BaseComponent/index.jsx';

class InfoBox extends BaseComponent {
    constructor(props) {
        super(props);
        this.elementClass = Element;
    }

    render() {
        return <span ref={this.attachElement} />
    }
}

InfoBox.propTypes = {};
InfoBox.ctor = Element;
InfoBox.defaultProps = {
    icon: 'E401',
    title: 'Hello World',
    text: 'foobar'
};

export default InfoBox;


