import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
const AppUIContext = createContext(null);
export const AppUIProvider = ({ config, children, }) => {
    return (_jsx(AppUIContext.Provider, { value: config, children: children }));
};
export const useAppUIConfig = () => {
    const ctx = useContext(AppUIContext);
    return useContext(AppUIContext) ?? {};
};
