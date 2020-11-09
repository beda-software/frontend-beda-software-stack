import * as Sentry from '@sentry/react-native';

import config from 'shared/lib/config';

import { setInstanceBaseURL } from 'aidbox-react/lib/services/instance';

if (config.mobileSentryDSN) {
    Sentry.init({
        dsn: config.mobileSentryDSN!,
    });
    Sentry.setTag('environment', config.tier);
}

setInstanceBaseURL(config.baseURL);
