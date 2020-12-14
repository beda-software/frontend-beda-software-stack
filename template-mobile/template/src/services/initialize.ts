import * as Sentry from '@sentry/react-native';

import config from 'shared/src/config';

import { setInstanceBaseURL } from 'aidbox-react/src/services/instance';

if (config.mobileSentryDSN) {
    Sentry.init({
        dsn: config.mobileSentryDSN!,
    });
    Sentry.setTag('environment', config.tier);
}

setInstanceBaseURL(config.baseURL);
