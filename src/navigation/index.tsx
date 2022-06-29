import React, {ReactElement} from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, Cuote } from "../modules";

type Props = {};
const Stack = createNativeStackNavigator();

export const Navigation:React.FC<Props> = (): ReactElement => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="/cuote">
                <Stack.Screen options={{ headerShown: false }} name="/cuote" component={Cuote} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
