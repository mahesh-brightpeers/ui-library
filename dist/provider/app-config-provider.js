import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
const AppUIContext = createContext(null);
export const AppUIProvider = ({ config, children, }) => {
    return (_jsx(AppUIContext.Provider, { value: config, children: children }));
};
export const useAppUIConfig = () => {
    var _a;
    const ctx = useContext(AppUIContext);
    return (_a = useContext(AppUIContext)) !== null && _a !== void 0 ? _a : {};
};
