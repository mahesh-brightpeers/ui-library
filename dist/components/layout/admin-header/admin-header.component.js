import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography } from '@mui/joy';
import { useAppUIConfig } from '../../../provider/app-config-provider';
import { HeaderContainer } from './admin-header.styles';
import { toRem } from '../../../utils/styles.utils';
import { ImageContainer } from '../../shared/image-container/image-container.component';
import { isEnvironmentProd } from '../../../utils/common.utils';
import EnvironmentLabel from './environment-label.component';
import useScreenSize from '../../../hooks/user-screen-size.hook';
import { APP_LOGO, APP_NAME, APP_NAME_ABBREVIATION, BREAKPOINTS, ENV, HEADER_HEIGHT, STATE_NAME } from '../../../constants/app-defaults.constants';
export const AdminHeader = ({ rightSlot }) => {
    const { stateName = STATE_NAME, appName = APP_NAME, appNameAbbreviation = APP_NAME_ABBREVIATION, environment = ENV, appLogo = APP_LOGO, headerHeight = HEADER_HEIGHT, breakpoints = BREAKPOINTS, } = useAppUIConfig();
    const { width } = useScreenSize();
    return (_jsxs(HeaderContainer, { height: headerHeight, direction: "row", gap: 2, alignItems: "center", justifyContent: "space-between", children: [_jsxs(Stack, { alignItems: "center", direction: 'row', children: [_jsx(ImageContainer, { alt: "state logo", src: appLogo, imgStyle: {
                            marginRight: '0.5rem',
                            width: toRem(40),
                            height: toRem(40),
                            objectFit: 'contain'
                        } }), _jsxs(Typography, { level: 'body-sm', sx: { lineHeight: 1.2 }, textColor: "neutral.800", fontWeight: 600, noWrap: true, children: [stateName, _jsx("br", {}), width < breakpoints.lg
                                ? appNameAbbreviation
                                : appName] }), !isEnvironmentProd(environment) && _jsx(EnvironmentLabel, {})] }), rightSlot && (_jsx(Stack, { direction: "row", spacing: 2, alignItems: "center", children: rightSlot }))] }));
};
