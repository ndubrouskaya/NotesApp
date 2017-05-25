import React from 'react';
import PropTypes from 'prop-types';

import './ColorPicker.scss';

const COLORS = ['#ffcccc', '#e6ffcc', '#ccfff5', '#ffffb3', '#ecc6ec', '#e0e0d1'];

class ColorPicker extends React.Component {
    render() {
        return (
            <div className="color-picker">
                {
                    COLORS.map((color, index) =>
                        <div
                            key={index}
                            className={'color-picker__item' + (this.props.value === color ? ' selected' : '')}
                            style={{backgroundColor: color}}
                            onClick={this.props.onChange.bind(null, color)}
                        />
                    )
                }
            </div>
        );
    }
}

ColorPicker.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default ColorPicker;