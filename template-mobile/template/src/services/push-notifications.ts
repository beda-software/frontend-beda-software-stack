import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Notifications, Notification } from 'react-native-notifications';
import {
    NotificationCompletion,
    NotificationBackgroundFetchResult,
} from 'react-native-notifications/lib/dist/interfaces/NotificationCompletion';
import { isFailure, notAsked } from 'aidbox-react/src/libs/remoteData';
import { forceDeleteFHIRResource, saveFHIRResource } from 'aidbox-react/src/services/fhir';
import { dispatch } from 'aidbox-react/src/hooks/bus';

import { PushSubscription } from 'shared/src/contrib/aidbox';

const pushSubscriptionTemplate: Partial<PushSubscription> = {
    resourceType: 'PushSubscription',
    id: DeviceInfo.getUniqueId(),
    deviceType: Platform.OS,
};

Notifications.registerRemoteNotifications();

Notifications.events().registerRemoteNotificationsRegistered((event) => {
    pushSubscriptionTemplate.deviceToken = event.deviceToken;
});

Notifications.events().registerRemoteNotificationsRegistrationFailed((event) => {
    console.warn(event);
});

export async function createPushSubscription(userId: string) {
    const response = await saveFHIRResource<PushSubscription>({
        ...pushSubscriptionTemplate,
        user: { resourceType: 'User', id: userId },
    } as PushSubscription);

    if (isFailure(response)) {
        console.warn('Can not create push subscription', response.error);
    }

    return response;
}

export async function deInitPushNotification() {
    if (pushSubscriptionTemplate.id) {
        return forceDeleteFHIRResource({
            resourceType: 'PushSubscription',
            id: pushSubscriptionTemplate.id,
        });
    }

    return notAsked;
}

Notifications.events().registerNotificationReceivedForeground(
    (notification: Notification, completion: (response: NotificationCompletion) => void) => {
        completion({ alert: true, sound: true, badge: false });
    },
);

Notifications.events().registerNotificationReceivedBackground(
    (
        notification: Notification,
        completion: (response: NotificationBackgroundFetchResult) => void,
    ) => {
        completion(NotificationBackgroundFetchResult.NEW_DATA);
    },
);

Notifications.events().registerNotificationOpened(
    (notification: Notification, completion: () => void) => {
        const data = getNotificationData(notification);

        dispatch({ type: 'NotificationOpened', payload: data });

        completion();
    },
);

function getNotificationData(notification: Notification): { action: string; params?: any } {
    if (Platform.OS === 'android') {
        return {
            ...notification.payload,
            params: notification.payload.params
                ? JSON.parse(notification.payload.params)
                : undefined,
        };
    } else {
        return notification.payload.data;
    }
}

export async function getInitialPushNotification() {
    const notification = await Notifications.getInitialNotification();

    return notification ? getNotificationData(notification) : undefined;
}
