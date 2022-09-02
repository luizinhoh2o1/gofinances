import React from "react";

import { StylesDashboard } from './styles'

import {
    Text, View
} from "react-native";

export function Dashboard() {
    return (
        <View style={StylesDashboard.container}>
            <Text style={StylesDashboard.title}>Dashboard</Text>
        </View>
    );
}
