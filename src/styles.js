import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    grey500, grey700,
    grey100, grey300, grey400,
    white, darkBlack, fullBlack, deepOrangeA200

} from 'material-ui/styles/colors'
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';

const red = "#c30000";

export const muiTheme = getMuiTheme({

    spacing: Object.assign(spacing, {
        desktopKeylineIncrement: 70,
    }),
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
    }
});
