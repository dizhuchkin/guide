import { List } from "antd";
import Typography from "antd/es/typography/Typography";
import { useLocation } from "react-router-dom";

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
		</>
	);
}
