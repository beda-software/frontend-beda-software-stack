import React from 'react';
import styles from './styles';
<% if (useHook) { %>
import { use<%= ComponentName %> } from './hooks';
<% } %>

interface Props {
}

export interface NavigationProps {
    componentId: string;
}

export function <%= ComponentName %>(props: NavigationPropss & Props) {
<% if (useHook) { %>
    const value = use<%= ComponentName %>();

<% } %>
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Scaffolding component</Text>
<% if (useHook) { %>
            <Text>{value}</Text>
<% } %>
        </View>
    )
}
