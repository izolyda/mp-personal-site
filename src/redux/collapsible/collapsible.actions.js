import CollapsibleActionTypes from './collapsible.types.js';

export const expandLeft = left => ({
    type: CollapsibleActionTypes.EXPAND_LEFT,
    payload: left
});

export const expandRight = right => ({
    type: CollapsibleActionTypes.EXPAND_RIGHT,
    payload: right
});