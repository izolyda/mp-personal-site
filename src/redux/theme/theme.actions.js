import ThemeActionTypes from './theme.types.js';

export const setLite = theme => ({
    type: ThemeActionTypes.SET_LITE,
    payload: theme
});

export const setDark = theme => ({
    type: ThemeActionTypes.SET_DARK,
    payload: theme
});

