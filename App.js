import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./screens/detail";
import Post from "./screens/post";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Post" component={Post} />
				<Stack.Screen name="Detail" component={Detail} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
