import type { ReactNode } from 'react';

export interface AppRoute {
  path: string;
  title: string;
  icon?: ReactNode;
  quickLink?: boolean; 
  subRoutes?: AppRoute[];
  buildPath?: (params: Record<string, string | number>) => string;
}