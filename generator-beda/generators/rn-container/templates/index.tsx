import React from 'react';
import { View, Text } from 'react-native';<% if (useHook) { %>
import { use<%= ComponentName %> } from './hooks';
<% } %>

import styles from './styles';

interface Props {
}

export function <%= ComponentName %>(props: Props) {
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
