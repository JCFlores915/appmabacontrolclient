import React, {ReactElement} from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, Cuote , ScanScreen} from "../modules";

type Props = {};
const Stack = createNativeStackNavigator();

export const Navigation:React.FC<Props> = (): ReactElement => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="/ScannScreen">
                <Stack.Screen options={{ headerShown: false }} name="/ScannScreen" component={Home} />
                <Stack.Screen options={{ headerShown: false }} name="/Home" component={Home} />
                <Stack.Screen options={{ headerShown: false }} name="/Cuote" component={Cuote} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
