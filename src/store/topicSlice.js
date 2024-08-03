import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
	name: "topic",
	initialState: {
		topic: [
			{
				key: 1,
				label: "useState",
				name: "useState",
			},
			{
				key: 2,
				label: "useEffect",
				name: "useEffect",
			},
			{
				key: 3,
				label: "useLayoutEffect",
				name: "useLayoutEffect",
			},
			{
				key: 4,
				label: "useContext",
				name: "useContext",
			},
			{
				key: 5,
				label: "useReducer",
				name: "useReducer",
			},
			{
				key: 6,
				label: "useCallback",
				name: "useCallback",
			},
			{
				key: 7,
				label: "useMemo",
				name: "useMemo",
			},
			{
				key: 8,
				label: "useRef",
				name: "useRef",
			},
			{
				key: 9,
				label: "useNavigate",
				name: "useNavigate",
			},
			{
				key: 10,
				label: "useLocation",
				name: "useLocation",
			},
			{
				key: 11,
				label: "useParams",
				name: "useParams",
			},
			{
				key: 12,
				label: "practices",
				name: "Полезные практики React",
			},
			{
				key: 13,
				label: "libraries",
				name: "Дополнительные библиотеки и фреймворки",
			},
			{
				key: 14,
				label: "hooks",
				name: "Дополнительные хуки",
			},
			{
				key: 15,
				label: "typescript",
				name: "TypeScript",
			},
			{
				key: 16,
				label: "html",
				name: "HTML",
			},
			{
				key: 17,
				label: "css",
				name: "CSS",
			},
			{
				key: 18,
				label: "js",
				name: "JS",
			},
			{
				key: 19,
				label: "react",
				name: "REACT",
			},
			{
				key: 20,
				label: "web",
				name: "WEB",
			},
		],
	},
});

export default topicSlice.reducer;
