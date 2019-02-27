import React from 'react';
import theme from '../../utils/theme';

export default function withTheme(styles) {
    var stylesObj = styles(theme);
    return function passStylesAsProps(ComponentToEnrich) {
        return function ComponentWithTheme(props) {
            return <ComponentToEnrich {...props} styles={stylesObj} />
        }
    }
}