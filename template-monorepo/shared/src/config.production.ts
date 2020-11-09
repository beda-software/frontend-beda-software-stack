import commonConfig from './config.common';

export default {
    ...commonConfig,

    tier: 'production',

    // TODO: These settings are required
    // TODO: you should manually uncomment then and fill with the correct value
    // baseURL: '',

    // TODO: if you don't need to use sentry for now - you can simply set null as value
    // webSentryDSN: '',
    // mobileSentryDSN: '',
};
