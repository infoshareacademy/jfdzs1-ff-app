import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    grey500, grey700,
    grey100, grey300, grey400,
    white, darkBlack, fullBlack, deepOrangeA200

} from 'material-ui/styles/colors'
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';
import raisedButton from 'material-ui/styles/getMuiTheme'

export const red = "#c30000";

export const muiTheme = getMuiTheme({

    spacing: {
        ...spacing,
        desktopKeylineIncrement: 70,
    },
    typography: typography,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: white,
        primary2Color: grey700,
        primary3Color: grey400,
        accent1Color: red,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: darkBlack,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: grey500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    },
    svgIcon: {
        color: deepOrangeA200
    },
    raisedButton: {
        ...raisedButton,
        secondaryColor: red,
        secondaryTextColor: white,
    },
});

export const styles = {
    button: {
        margin: 12
    },
    exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0
    },
};


