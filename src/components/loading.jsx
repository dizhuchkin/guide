import { Content } from "antd/es/layout/layout";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const contentStyle = {
	minHeight: "calc(100vh - 128px)",
	backgroundColor: "#f5f5f5",
	padding: "1rem",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

export default function LoadingContent() {
	return (
		<Content style={contentStyle}>
			<Spin
				indicator={
					<LoadingOutlined
						style={{
							fontSize: 60,
						}}
						spin
					/>
				}
			/>
		</Content>
	);
}
