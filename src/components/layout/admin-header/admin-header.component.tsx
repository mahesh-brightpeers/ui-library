import { FC, ReactNode } from 'react';
import { Stack, Typography } from '@mui/joy';
import { useAppUIConfig } from '../../../provider/app-config-provider';
import { HeaderContainer } from './admin-header.styles';
import { toRem } from '../../../utils/styles.utils';
import { ImageContainer } from '../../shared/image-container/image-container.component';
import { isEnvironmentProd } from '../../../utils/common.utils';
import EnvironmentLabel from './environment-label.component';
import useScreenSize from '../../../hooks/user-screen-size.hook';
import {
    APP_LOGO,
    APP_NAME,
    APP_NAME_ABBREVIATION,
    BREAKPOINTS,
    ENV,
    HEADER_HEIGHT,
    STATE_NAME
} from '../../../constants/app-defaults.constants';

export interface AdminHeaderProps {
    rightSlot?: ReactNode;
}

export const AdminHeader: FC<AdminHeaderProps> = ({ rightSlot }) => {

    const {
        stateName = STATE_NAME,
        appName = APP_NAME,
        appNameAbbreviation = APP_NAME_ABBREVIATION,
        environment = ENV,
        appLogo = APP_LOGO,
        headerHeight = HEADER_HEIGHT,
        breakpoints = BREAKPOINTS,
    } = useAppUIConfig();

    const { width } = useScreenSize();

    return (
        <HeaderContainer
            height={headerHeight}
            direction="row"
            gap={2}
            alignItems="center"
            justifyContent="space-between">
            <Stack alignItems="center" direction='row'>
                <ImageContainer
                    alt="state logo"
                    src={appLogo}
                    imgStyle={{
                        marginRight: '0.5rem',
                        width: toRem(40),
                        height: toRem(40),
                        objectFit: 'contain'
                    }}
                />
                <Typography
                    level='body-sm'
                    sx={{ lineHeight: 1.2 }}
                    textColor="neutral.800"
                    fontWeight={600}
                    noWrap>

                    {stateName}
                    <br />
                    {width < breakpoints.lg
                        ? appNameAbbreviation
                        : appName}

                </Typography>

                {!isEnvironmentProd(environment) && <EnvironmentLabel />}

            </Stack>
            {rightSlot && (
                <Stack direction="row" spacing={2} alignItems="center">
                    {rightSlot}
                </Stack>
            )}
        </HeaderContainer>
    );
};
