import React from 'react';
import PropTypes from 'prop-types';

import './ColorPicker.scss';

const COLORS = ['#ffcccc', '#e6ffcc', '#ccfff5', '#ffffb3', '#ecc6ec', '#e0e0d1'];

const ColorPicker = ({ value, onChange }) => (
    <div className="color-picker">
        {
            COLORS.map(color => (
                <div
                    tabIndex="-1"
                    role="menuitem"
                    key={color}
                    className={value === color ? 'color-picker__item selected' : 'color-picker__item'}
                    style={{ backgroundColor: color }}
                    onClick={() => onChange(color)}
                />
            ))
        }
    </div>
);

ColorPicker.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default ColorPicker;
