import { createMuiTheme } from '@material-ui/core/styles';
import { UniversalOverrides } from './UniversalOverrides';

export const DarkTheme = createMuiTheme({
    ...UniversalOverrides,
    type: {
        rgbColor: "255, 255, 255"
    },
    palette: {
        type: 'dark',
        primary: {
            main: 'rgba(0, 136, 227,1)',
            light: 'rgba(0, 136, 227, 0.1)'
        },
        background: {
            default: '#000000',
            paper: '#0A0A0A'
        },
        text: {
            primary: '#CDCDCD',
            subtitle: {
                color: "rgba(255,255,255,0.8)"
            },
        },
        server: {
            colors: {
                primary: "#045FB0",
            }
        },
    },
    overrides: {
        ...UniversalOverrides.overrides,
        MuiPaper: {
            elevation1: {
                boxShadow: "0px 2px 1px -1px rgba(174, 211, 255,0.2), 0px 2px 1px 0px rgba(174, 211, 255,0.14), 0px 1px 3px 0px rgba(174, 211, 255,0.12)"
            }
        }
    }
});

// export default DarkTheme;