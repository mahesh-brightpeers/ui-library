import { Stack } from '@mui/joy';
import { styled } from '@mui/joy/styles';
import { borderRadius } from '../../../utils/styles.utils';
export const AdminSidebarWrapper = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'sidebarWidth' && prop !== 'headerHeight',
})(({ theme, sidebarWidth, headerHeight }) => ({
    width: sidebarWidth,
    height: `calc(100vh - ${headerHeight})`,
    backgroundColor: theme.vars.palette.common.white,
    color: theme.vars.palette.primary.solidBg,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 1000,
    borderRight: `0.5px solid ${theme.vars.palette.divider}`,
    paddingBottom: theme.spacing(3),
    transition: 'width 0.3s ease',
}));
export const SidebarMenu = styled(Stack)(({ theme }) => ({
    flex: 1,
    padding: theme.spacing(2, 1.125, 2, 1.125),
    overflow: 'hidden'
}));
export const SidebarMenuItem = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
    padding: theme.spacing(1),
    gap: theme.spacing(1.5),
    cursor: 'pointer',
    width: '100%',
    height: '2.25rem',
    fontSize: '0.875rem',
    borderRadius: borderRadius(1),
    backgroundColor: active ? theme.vars.palette.primary.solidActiveBg : 'transparent',
    color: active ? theme.vars.palette.text.primary : theme.palette.text.primary,
    transition: 'all 0.2s ease',
    fontWeight: active ? theme.vars.fontWeight.lg : theme.vars.fontWeight.md,
    position: 'relative',
    '&:hover': {
        backgroundColor: active ? theme.vars.palette.primary[50] : theme.vars.palette.neutral[100],
    },
    '& svg': {
        fontSize: '1.5rem',
        color: 'inherit',
    },
    ...(active && {
        '*:not(.collapsed) &::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '3px',
            height: '60%',
            backgroundColor: theme.vars.palette.primary.solidBg,
            borderRadius: '0 2px 2px 0',
        },
    }),
}));
export const ExpandableMenuItem = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'active' && prop !== 'expanded',
})(({ active, theme }) => ({
    padding: theme.spacing(1),
    gap: theme.spacing(1.5),
    cursor: 'pointer',
    width: '100%',
    height: '2.25rem',
    fontSize: '.875rem',
    borderRadius: borderRadius(1),
    backgroundColor: active ? 'transparent' : 'transparent',
    color: active ? theme.vars.palette.text.primary : theme.vars.palette.text.primary,
    transition: 'all 0.2s ease',
    fontWeight: active ? theme.vars.fontWeight.lg : theme.vars.fontWeight.md,
    '&:hover': {
        backgroundColor: active ? theme.vars.palette.primary[50] : theme.vars.palette.neutral[100],
    },
    '& > svg': {
        fontSize: '1.5rem',
        color: 'inherit',
    },
    ...(active && {
        '&:hover': {
            backgroundColor: active ? 'transparent' : 'transparent'
        }
    }),
}));
export const ExpandArrow = styled('span', {
    shouldForwardProp: (prop) => prop !== 'expanded',
})(({ expanded, theme }) => ({
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.vars.palette.text.primary,
    transition: 'transform 0.2s ease',
    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
    '& svg': {
        fontSize: '20px',
    },
}));
export const SubMenuItems = styled('div')(() => ({
    backgroundColor: 'transparent',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
}));
export const SubMenu = styled('div')(({ theme }) => ({
    padding: theme.spacing(1, 0),
}));
export const SubMenuItem = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
    padding: theme.spacing(1, 1, 1, 5),
    gap: theme.spacing(1.5),
    cursor: 'pointer',
    width: '100%',
    height: '2.25rem',
    fontSize: '0.875rem',
    borderRadius: borderRadius(1),
    backgroundColor: active ? theme.vars.palette.primary.solidActiveBg : 'transparent',
    color: active ? theme.vars.palette.text.primary : theme.vars.palette.text.primary,
    transition: 'all 0.2s ease',
    fontWeight: theme.fontWeight.md,
    position: 'relative',
    '&:hover': {
        backgroundColor: active ? theme.vars.palette.primary[50] : theme.vars.palette.neutral[100],
    },
    ".active &": {
        '&::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '3px',
            height: '60%',
            backgroundColor: theme.vars.palette.primary.solidBg,
            borderRadius: '0 2px 2px 0',
        }
    }
}));
export const SidebarCollapseToggle = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'active',
})(({ theme }) => ({
    padding: theme.spacing(1, 1, 1, 1),
    cursor: 'pointer',
    width: "4.5rem",
    height: "6.25rem",
    top: "1.375rem",
    transform: "translateX(50%)",
    right: 0,
    position: "absolute",
    zIndex: 1,
}));
