import { Navigation } from 'react-native-navigation';
import { <%= ComponentName %><% if (isRootScreen) { %>, Props<% } %> } from './index'

const componentName = 'AppName.<%= ComponentName %>';

Navigation.registerComponent(componentName, () => <%= ComponentName %>);
<% if (isRootScreen) { %>
export function getComponentScreenConfig() {
    return {
        component: {
            name: componentName,
        },
    };
}

export function setComponentAsRoot() {
    Navigation.setRoot({
        root: {
            stack: {
                children: [getComponentScreenConfig()],
            },
        },
    });
}
<%} else { %>
export function pushComponentScreen(parentComponentId: string, passProps?: Props) {
    Navigation.push(parentComponentId, {
        component: {
            id: componentName,
            name: componentName,
            passProps,
        },
    });
}
<% } %>