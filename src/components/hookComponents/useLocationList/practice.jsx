import { List, Space, Card } from "antd";
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
		<Space
			direction="vertical"
			size="middle"
			style={{ display: "flex", marginTop: 10 }}
		>
			<Card title="Пример (информация о данной странице)">
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
			</Card>

			<Card title="Код">
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

<---------------------------------------------------->

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
			</Card>
		</Space>
	);
}
