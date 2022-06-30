import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { getComments } from "../../utils/getPosts";

const Detail = ({ route, navigation }) => {
	const { userId } = route.params;

	const [comments, setComments] = useState([]);

	useEffect(() => {
		getComments(userId)
			.then((response) => {
				const arrayComments = response.data;
				setComments(arrayComments);
			})
			.catch(console.error);
	}, []);

	const renderItem = ({ item }) => {
		return (
			<View style={styles.container_item}>
				<Text>{item.name}</Text>
				<Text>{item.email}</Text>
				<Text>{item.body}</Text>
			</View>
		);
	};

	return (
		<View>
			<FlatList
				data={comments}
				ListEmptyComponent={() => <Text>No found data.</Text>}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
		marginHorizontal: 15,
		alignItems: "center",
	},

	container_item: {
		flex: 1,
		borderWidth: 10,
		alignItems: "center",
	},
	button: {
		justifyContent: "flex-end",
		alignItems: "flex-end",
		backgroundColor: "oragen",
	},
	item: {
		height: 100,
		width: 300,
		flexDirection: "row",
		marginVertical: 5,
	},
});

export default Detail;
