import { Button } from "antd";
import Typography from "antd/es/typography/Typography";
import { useNavigate } from "react-router-dom";

export default function UseNavigatePractice() {
	const navigate = useNavigate();

	const goToAboutPage = () => {
		navigate("/hook/useState");
	};

	return (
		<>
			<Typography.Title level={3}>Пример (/useState)</Typography.Title>
			<Button onClick={goToAboutPage} type="primary">
				Переход к странице About
			</Button>
		</>
	);
}
