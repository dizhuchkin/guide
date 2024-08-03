import { Button, Divider, Flex } from "antd";
import { Content } from "antd/es/layout/layout";
import { Typography } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getWordAfterLatsSlash } from "../../utils/string";

const contentStyle = {
	textAlign: "center",
	minHeight: "calc(100vh - 128px)",
	backgroundColor: "#f5f5f5",
	padding: "1rem",
};

const listStyle = {
	backgroundColor: "#fff",
	color: "black",
	borderRadius: "4px",
	padding: "1rem",
};

export default function LayoutList() {
	const listTopic = useSelector((state) => state.topic.topic);
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<Content style={contentStyle}>
			{location?.pathname !== "/" ? (
				<Flex justify="space-between">
					<Typography.Title level={3}>
						{
							listTopic.find(
								(item) =>
									item.label ===
									getWordAfterLatsSlash(location?.pathname)
							).name
						}
					</Typography.Title>
					<Button onClick={() => navigate(-1)}>Назад</Button>
				</Flex>
			) : (
				<Typography.Title level={3}>React</Typography.Title>
			)}
			<Divider />
			<div style={listStyle}>
				<Outlet />
			</div>
		</Content>
	);
}
