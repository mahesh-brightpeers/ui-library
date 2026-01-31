export interface breakpointsType {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}

export interface AppConfig {
    stateName?: string;
    appName?: string;
    appNameAbbreviation?: string;
    appLogo?: string;
    environment?: string;
    headerHeight?: number;
    sidebarWidth?: number;
    breakpoints?: breakpointsType;
}