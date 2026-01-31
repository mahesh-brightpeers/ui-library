import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AdminSidebarWrapper, SidebarMenu, SidebarMenuItem, ExpandableMenuItem, ExpandArrow, SubMenuItems, SubMenuItem, SubMenu, SidebarCollapseToggle, } from './admin-layout.styles';
import { IconButton } from '@mui/joy';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useAppUIConfig } from '../../../provider/app-config-provider';
import { HEADER_HEIGHT, SIDEBAR_FULL_WIDTH, SIDEBAR_SHRINKED_WIDTH } from '../../../constants/app-defaults.constants';
const SidebarItem = ({ to, icon, label, displayLabel }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (_jsx(NavLink, { to: to, style: { textDecoration: 'none' }, children: _jsxs(SidebarMenuItem, { active: isActive, direction: 'row', alignItems: 'center', children: [icon, displayLabel && (_jsx(Typography, { sx: { color: 'inherit', fontSize: '0.875rem' }, children: label }))] }) }));
};
export const AdminSidebar = (props) => {
    const { setCollapsed, collapsed } = props;
    const [hovered, setHovered] = useState(false);
    const { headerHeight = HEADER_HEIGHT, sidebarFullWidth = SIDEBAR_FULL_WIDTH, sidebarCollpasedWidth = SIDEBAR_SHRINKED_WIDTH, appRoutes = {}, } = useAppUIConfig();
    const sidebarWidth = hovered || !collapsed ? sidebarFullWidth : sidebarCollpasedWidth;
    const [expandedItems, setExpandedItems] = useState([]);
    const location = useLocation();
    const toggleExpand = (path) => {
        setExpandedItems(prev => prev.includes(path)
            ? prev.filter(item => item !== path)
            : [...prev, path]);
    };
    useEffect(() => {
        const activeParents = [];
        Object.values(appRoutes).forEach((route) => {
            if (route.subRoutes?.some((subRoute) => location.pathname === subRoute.path)) {
                activeParents.push(route.path);
            }
        });
        setExpandedItems(activeParents);
    }, [location.pathname]);
    return (_jsxs(AdminSidebarWrapper, { direction: 'column', sidebarWidth: sidebarWidth, headerHeight: headerHeight, className: `admin-sidebar ${collapsed ? 'collapsed' : ''}`, children: [_jsx(SidebarCollapseToggle, { direction: "row", alignItems: "center", justifyContent: "center", children: _jsx(IconButton, { variant: 'solid', onClick: () => setCollapsed(!collapsed), size: "sm", sx: (theme) => ({
                        borderRadius: "100%",
                        width: "1rem",
                        height: "1rem",
                        border: `1px solid ${theme.vars.palette.primary[500]}`,
                        boxShadow: theme.vars.shadow.xs,
                        color: theme.vars.palette.text.primary,
                        backgroundColor: theme.vars.palette.common.white,
                        '&:hover, &:focus': {
                            backgroundColor: theme.vars.palette.primary.solidActiveBg,
                            color: theme.vars.palette.text.primary,
                        }
                    }), children: collapsed ? _jsx(ChevronRightIcon, {}) : _jsx(ChevronLeftIcon, {}) }) }), _jsx(SidebarMenu, { direction: 'column', gap: '0.5rem', role: "navigation", children: Object.values(appRoutes)
                    .filter((route) => route.quickLink)
                    .map((route) => {
                    const hasSubRoutes = Array.isArray(route.subRoutes) && route.subRoutes.length > 0;
                    const isExpanded = expandedItems.includes(route.path);
                    // Highlight parent if current route matches parent or any subroute
                    const isParentActive = location.pathname === route.path ||
                        (hasSubRoutes && route.subRoutes.some(subRoute => location.pathname === subRoute.path));
                    if (hasSubRoutes) {
                        return (_jsxs("div", { children: [_jsxs(ExpandableMenuItem, { direction: 'row', alignItems: 'center', onClick: () => toggleExpand(route.path), expanded: isExpanded, active: isParentActive, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), children: [route.icon, (hovered || !collapsed) && (_jsx(Typography, { sx: { color: 'inherit', flex: 1, fontSize: '.875rem' }, children: route.title })), _jsx(ExpandArrow, { expanded: isExpanded, children: _jsx(KeyboardArrowDownIcon, { sx: { fontSize: 20 } }) })] }), (isExpanded && (hovered || !collapsed)) && (_jsx(SubMenu, { children: _jsx(SubMenuItems, { children: (route.subRoutes || []).map((subRoute) => {
                                            const isActive = location.pathname === subRoute.path;
                                            return (_jsx(NavLink, { to: subRoute.path, style: { textDecoration: 'none' }, children: _jsx(SubMenuItem, { active: isActive, direction: 'row', alignItems: 'center', children: (hovered || !collapsed) && (_jsx(Typography, { sx: { color: 'inherit', fontSize: '.875rem' }, children: subRoute.title })) }) }, subRoute.path));
                                        }) }) }))] }, route.path));
                    }
                    // Non-expandable route -> render a clickable link
                    return (_jsx("div", { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), children: _jsx(SidebarItem, { to: route.path, icon: route.icon, label: route.title, displayLabel: !collapsed || hovered }) }, route.path));
                }) })] }));
};
