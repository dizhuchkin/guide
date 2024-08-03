import Typography from "antd/es/typography/Typography";
import { Button, InputNumber, Flex} from "antd";
import { useState, useEffect } from "react";

export default function UseEffectPractice() {
	const [count, setCount] = useState(0);

	function click() {
		setCount((value) => {
			return value + 1;
		});
	}

	// Срабатывает при первом рендере
	useEffect(() => {
		console.log("first render");
	}, []);

	const handler = () => {
		console.log("Случился клик!");
	};

	// Зависит от элементов
	useEffect(() => {
		console.log(`Запуск эффекта`);
		window.addEventListener("click", handler);

		return () => {
			console.log(`Очистка эффекта`);
			window.removeEventListener("click", handler);
		};
	}, [handler]);

	return (
		<>
			<Typography.Title level={3}>Пример</Typography.Title>
			<Flex
				style={{ width: 200, margin: "auto" }}
				align="center"
				vertical
			>
				<InputNumber
					value={count}
					disabled
					style={{ marginBottom: 10 }}
				/>
				<Button onClick={click} type="primary">
					Count++
				</Button>
			</Flex>
		</>
	);
}
