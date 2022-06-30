import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, Button } from "react-native";
import { Searchbar } from "react-native-paper";
import { getPost } from "../../utils/getPosts";
import { searchPost } from "../../utils/searchPost";

const Post = ({ navigation }) => {
	const [text, setText] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPost()
			.then((response) => {
				const arrayPosts = response.data;
				setPosts(arrayPosts);
			})
			.catch();
	}, []);

	const renderItem = ({ item }) => {
		return (
			<View style={styles.container_item}>
				<View style={styles.item}>
					<Text>{item.id}</Text>
					<Text>{item.title}</Text>
				</View>
				<Button
					style={styles.button}
					title="Show more"
					onPress={() => {
						navigation.navigate("Detail", {
							userId: item.userId,
						});
					}}
				/>
			</View>
		);
	};
	return (
		<View style={styles.container}>
			<Searchbar placeholder="Search" onChangeText={setText} value={text} />
			<FlatList
				data={searchPost(text, posts)}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				ListEmptyComponent={() => <Text>No found data.</Text>}
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

export default Post;
