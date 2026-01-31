import { jsx as _jsx } from "react/jsx-runtime";
import { Stack, Typography } from '@mui/joy';
import { useAppUIConfig } from '../../../provider/app-config-provider';
import { borderRadius } from '../../../utils/styles.utils';
const EnvironmentLabel = () => {
    const { environment, } = useAppUIConfig();
    return _jsx(Stack, { alignItems: "center", spacing: 3, sx: { pl: 1.5 }, children: _jsx(Typography, { sx: { py: 0.5, px: 1, borderRadius: borderRadius(4) }, level: "body-xs", textColor: 'common.black', textTransform: "uppercase", bgcolor: 'primary.solidActiveBg', fontWeight: 600, children: environment }) });
};
export default EnvironmentLabel;
