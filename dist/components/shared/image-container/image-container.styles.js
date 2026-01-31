import { styled } from '@mui/joy/styles';
import Stack from '@mui/joy/Stack';
export const ImageWrapper = styled('div')({
    position: 'relative',
});
export const LoadingOverlay = styled(Stack)({
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});
export const StyledImage = styled('img')(({ isLoading }) => ({
    opacity: isLoading ? 0 : 1,
    transition: 'opacity 0.2s ease-in',
}));
