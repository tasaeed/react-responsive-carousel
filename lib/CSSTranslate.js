'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (position, axis, rtl) {
    var getPosition = rtl ? position.replace('-', '') : position;
    var positionCss = axis === 'horizontal' ? [getPosition, 0, 0] : [0, getPosition, 0];
    var transitionProp = 'translate3d';

    var translatedPosition = '(' + positionCss.join(',') + ')';

    return transitionProp + translatedPosition;
};