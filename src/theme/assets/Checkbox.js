// Core
import React, { Component } from 'react';

// Imstruments
import transform from './Svg';

class Checkbox extends Component {
    render () {
        const { checked, color1, color2 } = this.props;

        const fill = checked ? color1 : color2;

        return (
            <g>
                <rect
                    fill = { fill }
                    height = '25'
                    rx = '5'
                    ry = '5'
                    stroke = { color1 }
                    style = { { strokeWidth: 2 } }
                    width = '25'
                    x = '1'
                    y = '1'
                />
                <path
                    d = 'M22.12 6c-3.12 3.16-6.84 6.36-10.23 9.64l-5.42-4.05L4 14.84l6.78 5.08L12.23 21l1.25-1.25C17 16.2 21.29 12.6 25 8.89z'
                    fill = { color2 }
                />
            </g>
        );
    }
}
// <path class="st0" d="M79.2,14.1L65.1,0L29,36L14.1,21.1L0,35.2l29,29.1L79.2,14.1z"/>

export default transform({ viewBoxWidth: 27, viewBoxHeight: 27, width: 25, height: 25 })(Checkbox);
