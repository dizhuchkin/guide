import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "./topicSlice.js";

const config = configureStore({
	reducer: {
		topic: topicReducer,
	},
});

export default config;
