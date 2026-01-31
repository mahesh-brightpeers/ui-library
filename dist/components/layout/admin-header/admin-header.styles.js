import { styled } from '@mui/joy/styles';
import { Stack } from '@mui/joy';
export const HeaderContainer = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'height',
})(({ theme, height }) => ({
    width: '100%',
    height: height,
    padding: theme.spacing(1.5, 2),
    backgroundColor: theme.palette.common.white,
    borderBottom: `1px solid rgba(${theme.palette.neutral.mainChannel} / 0.6)`,
}));
