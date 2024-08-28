import { Button, Space } from "antd";
import Typography from "antd/es/typography/Typography";
import { useNavigate } from "react-router-dom";

const codeStyle = {
	textAlign: "left",
	minWidth: "150px",
	backgroundColor: "#f4f4f4",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
};

export default function UseNavigatePractice() {
	const navigate = useNavigate();

	const goToAboutPage = () => {
		navigate("/hook/useState");
	};

	return (
		<>
			<Typography.Title level={3}>Пример (/useState)</Typography.Title>
			<Button onClick={goToAboutPage} type="primary">
				Переход к странице useState
			</Button>
			<Typography.Title level={3}>Код</Typography.Title>
			<Space style={{ marginBottom: 10 }} direction="vertical">
				<pre style={codeStyle}>{`
const navigate = useNavigate();

const goToAboutPage = () => {
	navigate("/hook/useState");
};
------------------------------------
<Button onClick={goToAboutPage} type="primary">
	Переход к странице About
</Button>
	`}</pre>
			</Space>
		</>
	);
}
