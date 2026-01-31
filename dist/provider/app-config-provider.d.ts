import { ReactNode } from 'react';
import { AppConfig } from '../types/app-config.types';
export declare const AppUIProvider: ({ config, children, }: {
    config: AppConfig;
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useAppUIConfig: () => AppConfig;
