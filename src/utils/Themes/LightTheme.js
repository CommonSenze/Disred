import { createMuiTheme } from '@material-ui/core/styles';
import { UniversalOverrides } from './UniversalOverrides';


export const LightTheme = createMuiTheme({
    ...UniversalOverrides,
    type: {
        rgbColor: "0,0,0"
    },
    palette: {
        type: 'light',
        primary: {
            main: 'rgba(0, 136, 227,1)',
            light: 'rgba(0, 136, 227, 0.1)'
        },
        text: {
            primary: '#000000',
            subtitle: {
                color: "rgba(0,0,0,0.65)"
            },
        },
        server: {
            colors: {
                primary: "#318FE2",
            }
        },
    },
});
