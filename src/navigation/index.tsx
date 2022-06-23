import React, {ReactElement} from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../modules";

type Props = {};
const Stack = createNativeStackNavigator();

export const Navigation:React.FC<Props> = (): ReactElement => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="/home">
                <Stack.Screen options={{ headerShown: false }} name="/home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
