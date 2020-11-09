import * as Sentry from '@sentry/browser';

import { setInstanceBaseURL } from 'aidbox-react/lib/services/instance';

import config from 'shared/lib/config';

if (config.webSentryDSN) {
    Sentry.init({
        dsn: config.webSentryDSN!,
    });
    Sentry.configureScope((scope) => {
        scope.setTag('environment', config.tier);
    });
}

setInstanceBaseURL(config.baseURL);
