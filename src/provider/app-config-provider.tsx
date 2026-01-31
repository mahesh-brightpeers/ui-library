import { createContext, ReactNode, useContext } from 'react';
import { AppConfig } from '../types/app-config.types';

const AppUIContext = createContext<AppConfig | null>(null);

export const AppUIProvider = ({
    config,
    children,
}: {
    config: AppConfig;
    children: ReactNode;
}) => {
    return (
        <AppUIContext.Provider value={config}>
            {children}
        </AppUIContext.Provider>
    );
};

export const useAppUIConfig = () => {
  const ctx = useContext(AppUIContext);
  return useContext(AppUIContext) ?? {};
};
