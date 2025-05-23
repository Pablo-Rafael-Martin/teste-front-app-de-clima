import { theme, ThemeConfig } from "antd"

const primaryBackground = '#f5f5f5';
const mainBlue = '#0057FF';

export const themeConfig: ThemeConfig = {
    algorithm: theme.defaultAlgorithm,
    token: {
        colorBgBase: primaryBackground,
        colorPrimary: mainBlue,
        colorInfo: mainBlue,
        colorLink: mainBlue,
    },
    components: {
        Layout: {
            bodyBg: primaryBackground,
        },
        Button: {
            defaultColor: 'white !important',
            defaultBg: 'black !important',
            primaryColor: 'white !important',
            // activeBg: 'transparent',
        }
    }
}