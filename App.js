import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { ActivityIndicator, StatusBar, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import EsinavScreen from "./screens/EsinavScreen";
import ResultScreen from "./screens/ResultScreen";

const Stack = createStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="WelcomeScreen"
				options={{ headerShown: false }}
				component={WelcomeScreen}
			/>
			<Stack.Screen
				name="HomeScreen"
				options={{ headerShown: false }}
				component={HomeScreen}
			/>
			<Stack.Screen
				name="EsinavScreen"
				options={{ headerShown: false }}
				component={EsinavScreen}
			/>
			<Stack.Screen
				name="ResultScreen"
				options={{ headerShown: false }}
				component={ResultScreen}
			/>
		</Stack.Navigator>
	);
}

export default function App() {
	let [fontsLoaded] = useFonts({
		Yellowtail: require("./assets/fonts/Yellowtail-Regular.ttf"),
		Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
		PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
	});
	if (!fontsLoaded) {
		return (
			<View
				style={{
					flexDirection: "row",
					alignSelf: "center",
					justifyContent: "center",
					flex: 1,
				}}
			>
				<ActivityIndicator size="large" color="#009AFF" />
			</View>
		);
	} else {
		return (
			<NavigationContainer>
				<StatusBar backgroundColor={"#57737A"} />
				<MyStack />
			</NavigationContainer>
		);
	}
}
