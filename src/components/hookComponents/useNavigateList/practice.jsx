import { Button, Space, Card } from "antd";
import { useNavigate } from "react-router-dom";

const codeStyle = {
	textAlign: "left",
	minWidth: "150px",
	backgroundColor: "#f4f4f4",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
	textWrap: "wrap",
};

export default function UseNavigatePractice() {
	const navigate = useNavigate();

	const goToAboutPage = () => {
		navigate("/hook/useState");
	};

	return (
		<Space
			direction="vertical"
			size="middle"
			style={{ display: "flex", marginTop: 10 }}
		>
			<Card title="Пример (переход к useState)">
				<Button onClick={goToAboutPage} type="primary">
					Переход к странице useState
				</Button>
			</Card>

			<Card title="Код">
				<pre style={codeStyle}>{`
const navigate = useNavigate();

const goToAboutPage = () => {
	navigate("/hook/useState");
};

<---------------------------------------------------->

<Button onClick={goToAboutPage} type="primary">
	Переход к странице useState
</Button>
	`}</pre>
			</Card>
		</Space>
	);
}
