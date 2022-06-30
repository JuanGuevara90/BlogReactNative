export const searchPost = (text, posts) => {
	if (!text || text === "") {
		return posts;
	}
	return posts.filter((post) => post.title.includes(text));
};
