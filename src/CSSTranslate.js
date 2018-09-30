export default (position, axis, rtl) => {
    const getPosition = rtl ? position.replace('-', '') : position;
    const positionCss = (axis === 'horizontal') ? [getPosition, 0, 0] : [0, getPosition, 0];
    const transitionProp = 'translate3d';

    const translatedPosition = '(' + positionCss.join(',') + ')';

    return transitionProp + translatedPosition;
};
