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


export const breakpoints = {
    mobile: '480px',
    tablet: '1024px',
    desktop: '1920px',
    wide: '2560px',
};

export const device = {
    mobile: `(max-width: ${breakpoints.mobile})`,
    tablet: `(max-width: ${breakpoints.tablet})`,
    desktop: `(max-width: ${breakpoints.desktop})`,
    wide: `(max-width: ${breakpoints.wide})`,
};

export const ContainerHistoryFontSizes = {
    temp: {
        mobile: '32rem',
        tablet: '32rem',
        desktop: '32rem',
    },
    local: {
        mobile: '16rem',
        tablet: '16rem',
        desktop: '16rem',
    },
    status: {
        mobile: '12rem',
        tablet: '12rem',
        desktop: '12rem',
    }
}

export const RowCurrentInfoFontSizes = {
    temp: {
        mobile: '80rem',
        tablet: '80rem',
        desktop: '80rem',
    },
    local: {
        mobile: '24rem',
        tablet: '24rem',
        desktop: '24rem',
    },
    status: {
        mobile: '16rem',
        tablet: '16rem',
        desktop: '16rem',
    },
    aditionalInfo: {
        mobile: '12rem',
        tablet: '12rem',
        desktop: '12rem',
    }
};

export const TodaysInfoFontSizes = {
    time: {
        mobile: '12rem',
        tablet: '12rem',
        desktop: '12rem',
    },
    icon: {
        mobile: '28rem',
        tablet: '28rem',
        desktop: '28rem',
    },
    temperature: {
        mobile: '24rem',
        tablet: '24rem',
        desktop: '24rem',
    }
};

export const NextDaysInfoFontSizes = {
    date: {
        mobile: '16rem',
        tablet: '16rem',
        desktop: '16rem',
    },
    temp: {
        mobile: '20rem',
        tablet: '20rem',
        desktop: '20rem',
    },
    description: {
        mobile: '10rem',
        tablet: '10rem',
        desktop: '10rem',
    },
    minMax: {
        mobile: '10rem',
        tablet: '10rem',
        desktop: '10rem',
    }
};