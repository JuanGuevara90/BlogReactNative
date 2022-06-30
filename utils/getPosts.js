import axios from "axios";

export const getPost = () =>
	axios("https://jsonplaceholder.typicode.com/posts");

export const getComments = (query) =>
	axios(`https://jsonplaceholder.typicode.com/comments?postId=${query}`);
