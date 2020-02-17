import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";
import BusinessScreen from "./src/screens/BusinessScreen";

const Stack = createStackNavigator();
const headerStyle = {
    headerStyle: {
        backgroundColor: "#f4511e",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "bold",
    },
};
export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SearchScreen">
                <Stack.Screen name="SearchScreen" component={SearchScreen} options={headerStyle} />
                <Stack.Screen
                    name="BusinessScreen"
                    component={BusinessScreen}
                    options={headerStyle}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
