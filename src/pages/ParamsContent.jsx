import { Content } from "antd/es/layout/layout";
import { Button, Layout, InputNumber, Flex } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";

const contentStyle = {
	textAlign: "center",
	minHeight: "calc(100vh - 128px)",
	backgroundColor: "#f5f5f5",
	padding: "1rem",
	display: "flex",
	justifyAlign: "center",
};

export default function ParamsContent() {
	const { idUser, idPost } = useParams();
	const navigate = useNavigate();

	return (
		<Layout>
			<Content style={contentStyle}>
				<Flex style={{ width: 300, margin: "auto" }} align="center">
					<InputNumber
						disabled
						value={idUser}
						style={{ width: "200px", marginRight: "20px" }}
					/>
					<InputNumber
						disabled
						value={idPost}
						style={{ width: "200px", marginRight: "20px" }}
					/>
					<Button
						onClick={() => {
							navigate(-1);
						}}
						type="primary"
					>
						<ArrowLeftOutlined />
						Вернуться
					</Button>
				</Flex>
			</Content>
		</Layout>
	);
}
