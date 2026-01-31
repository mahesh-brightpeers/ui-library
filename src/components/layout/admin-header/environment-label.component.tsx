import { Stack, Typography } from '@mui/joy';
import { useAppUIConfig } from '../../../provider/app-config-provider';
import { borderRadius } from '../../../utils/styles.utils';

const EnvironmentLabel = () => {

    const {
        environment,
    } = useAppUIConfig();

    return <Stack alignItems="center" spacing={3} sx={{ pl: 1.5 }}>
        <Typography
            sx={{ py: 0.5, px: 1, borderRadius: borderRadius(4) }}
            level="body-xs"
            textColor='common.black'
            textTransform="uppercase"
            bgcolor='primary.solidActiveBg'
            fontWeight={600}
        >
            {environment}
        </Typography>
    </Stack>
};

export default EnvironmentLabel;
