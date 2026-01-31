import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
    AdminSidebarWrapper,
    SidebarMenu,
    SidebarMenuItem,
    ExpandableMenuItem,
    ExpandArrow,
    SubMenuItems,
    SubMenuItem,
    SubMenu,
    SidebarCollapseToggle,
} from './admin-layout.styles';
import { IconButton } from '@mui/joy';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useAppUIConfig } from '../../../provider/app-config-provider';
import { HEADER_HEIGHT, SIDEBAR_FULL_WIDTH, SIDEBAR_SHRINKED_WIDTH } from '../../../constants/app-defaults.constants';

interface SidebarItemProps {
    to: string;
    icon: React.ReactNode;
    label: string;
    displayLabel: boolean
}

const SidebarItem = ({ to, icon, label, displayLabel }: SidebarItemProps) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <NavLink to={to} style={{ textDecoration: 'none' }}>
            <SidebarMenuItem
                active={isActive}
                direction='row'
                alignItems='center'
            >
                {icon}
                {displayLabel && (
                    <Typography sx={{ color: 'inherit', fontSize: '0.875rem' }}>
                        {label}
                    </Typography>
                )}

            </SidebarMenuItem>
        </NavLink>
    );
};

interface SidebarProps {
    collapsed: boolean,
    setCollapsed: Function,
}

export const AdminSidebar = (props: SidebarProps) => {

    const { setCollapsed, collapsed } = props;

    const [hovered, setHovered] = useState(false);

    const {
        headerHeight = HEADER_HEIGHT,
        sidebarFullWidth = SIDEBAR_FULL_WIDTH,
        sidebarCollpasedWidth = SIDEBAR_SHRINKED_WIDTH,
        appRoutes = {},
    } = useAppUIConfig();

    const sidebarWidth = hovered || !collapsed ? sidebarFullWidth : sidebarCollpasedWidth;


    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const location = useLocation();

    const toggleExpand = (path: string) => {
        setExpandedItems(prev =>
            prev.includes(path)
                ? prev.filter(item => item !== path)
                : [...prev, path]
        );
    };

    useEffect(() => {
        const activeParents: string[] = [];

        Object.values(appRoutes).forEach((route) => {
            if (
                route.subRoutes?.some(
                    (subRoute) => location.pathname === subRoute.path
                )
            ) {
                activeParents.push(route.path);
            }
        });

        setExpandedItems(activeParents);
    }, [location.pathname]);



    return (
        <AdminSidebarWrapper
            direction='column'
            sidebarWidth={sidebarWidth}
            headerHeight={headerHeight}
            className={`admin-sidebar ${collapsed ? 'collapsed' : ''}`}
        >
            <SidebarCollapseToggle
                direction="row"
                alignItems="center"
                justifyContent="center"
            >
                <IconButton
                    variant='solid'
                    onClick={() => setCollapsed(!collapsed)}
                    size="sm"
                    sx={(theme) => ({
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
                    })}
                >
                    {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </SidebarCollapseToggle>

            <SidebarMenu
                direction='column'
                gap='0.5rem'
                role="navigation"
            >
                {Object.values(appRoutes)
                    .filter((route) => route.quickLink)
                    .map((route) => {
                        const hasSubRoutes = Array.isArray(route.subRoutes) && route.subRoutes.length > 0;
                        const isExpanded = expandedItems.includes(route.path);
                        // Highlight parent if current route matches parent or any subroute
                        const isParentActive =
                            location.pathname === route.path ||
                            (hasSubRoutes && route.subRoutes!.some(subRoute => location.pathname === subRoute.path));

                        if (hasSubRoutes) {
                            return (
                                <div key={route.path}>
                                    <ExpandableMenuItem
                                        direction='row'
                                        alignItems='center'
                                        onClick={() => toggleExpand(route.path)}
                                        expanded={isExpanded}
                                        active={isParentActive}
                                        onMouseEnter={() => setHovered(true)}
                                        onMouseLeave={() => setHovered(false)}
                                    >
                                        {route.icon}
                                        {(hovered || !collapsed) && (
                                            <Typography sx={{ color: 'inherit', flex: 1, fontSize: '.875rem' }}>
                                                {route.title}
                                            </Typography>
                                        )}

                                        <ExpandArrow expanded={isExpanded}>
                                            <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
                                        </ExpandArrow>
                                    </ExpandableMenuItem>

                                    {(isExpanded && (hovered || !collapsed)) && (
                                        <SubMenu>
                                            <SubMenuItems>
                                                {(route.subRoutes || []).map((subRoute) => {
                                                    const isActive = location.pathname === subRoute.path;
                                                    return (
                                                        <NavLink
                                                            key={subRoute.path}
                                                            to={subRoute.path}
                                                            style={{ textDecoration: 'none' }}
                                                        >
                                                            <SubMenuItem
                                                                active={isActive}
                                                                direction='row'
                                                                alignItems='center'
                                                            >
                                                                {(hovered || !collapsed) && (
                                                                    <Typography sx={{ color: 'inherit', fontSize: '.875rem' }}>
                                                                        {subRoute.title}
                                                                    </Typography>
                                                                )}
                                                            </SubMenuItem>
                                                        </NavLink>
                                                    );
                                                })}
                                            </SubMenuItems>
                                        </SubMenu>
                                    )}
                                </div>
                            );
                        }

                        // Non-expandable route -> render a clickable link
                        return (
                            <div
                                key={route.path}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                            >
                                <SidebarItem
                                    to={route.path}
                                    icon={route.icon}
                                    label={route.title}
                                    displayLabel={!collapsed || hovered}
                                />
                            </div>
                        );
                    })}
            </SidebarMenu>
        </AdminSidebarWrapper>
    );
};
