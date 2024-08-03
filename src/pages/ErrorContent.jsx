import { Content } from "antd/es/layout/layout";
import { Empty } from "antd";

const contentStyle = {
	minHeight: "calc(100vh - 128px)",
	backgroundColor: "#f5f5f5",
	padding: "1rem",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

export default function ErrorContent() {
	return (
		<Content style={contentStyle}>
			<Empty />
		</Content>
	);
}
