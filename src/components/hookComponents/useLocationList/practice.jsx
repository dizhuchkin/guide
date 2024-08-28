import { List } from "antd";
import Typography from "antd/es/typography/Typography";
import { useLocation } from "react-router-dom";

const codeStyle = {
	textAlign: "left",
	minWidth: "150px",
	backgroundColor: "#f4f4f4",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
	textWrap: "wrap",
};

export default function UseLocationPractice() {
	const loc = useLocation();
	const infoLocation = [
		{
			title: "pathname:",
			content: loc.pathname || "null",
		},
		{
			title: "search:",
			content: loc.search || "null",
		},
		{
			title: "hash:",
			content: loc.hash || "null",
		},
		{
			title: "state:",
			content: loc.state || "null",
		},
		{
			title: "key:",
			content: loc.key || "null",
		},
	];
	return (
		<>
			<Typography.Title level={3}>
				Пример (useLocation данной страницы)
			</Typography.Title>
			<List
				size="small"
				bordered
				title="Заголовок"
				dataSource={infoLocation}
				renderItem={(item) => (
					<List.Item>
						<List.Item.Meta
							title={item.title}
							description={item.content}
						/>
					</List.Item>
				)}
			/>
			<Typography.Title level={3}>Код</Typography.Title>

			<pre style={codeStyle}>{`
const loc = useLocation();
const infoLocation = [
	{
		title: "pathname:",
		content: loc.pathname || "null",
	},
	{
		title: "search:",
		content: loc.search || "null",
	},
	{
		title: "hash:",
		content: loc.hash || "null",
	},
	{
		title: "state:",
		content: loc.state || "null",
	},
	{
		title: "key:",
		content: loc.key || "null",
	},
];
-------------------------------------------
<List
	size="small"
	bordered
	title="Заголовок"
	dataSource={infoLocation}
	renderItem={(item) => (
		<List.Item>
			<List.Item.Meta
				title={item.title}
				description={item.content}
			/>
		</List.Item>
	)}
/>
	`}</pre>
		</>
	);
}
