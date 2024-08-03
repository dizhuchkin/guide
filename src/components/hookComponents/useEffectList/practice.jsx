import Typography from "antd/es/typography/Typography";
import { Button, InputNumber, Flex, Space } from "antd";
import { useState, useEffect } from "react";

const codeStyle = {
	textAlign: "left",
	minWidth: "150px",
	backgroundColor: "#f4f4f4",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
};

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

	// Зависит от элементов
	useEffect(() => {
		console.log(`Запуск эффекта`);

		return () => {
			console.log(`Очистка эффекта`);
		};
	}, [count]);

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
			<Typography.Title level={3}>Код</Typography.Title>
			<Space style={{ marginBottom: 10 }} direction="vertical">
				<pre style={codeStyle}>{`
// Срабатывает при первом рендере
const [count, setCount] = useState(0);

useEffect(() => {
	console.log("first render");
}, []);

// Зависит от элементов
useEffect(() => {
	console.log('Запуск эффекта');

	return () => {
		console.log('Очистка эффекта');
	};
}, [count]);
	`}</pre>
			</Space>
		</>
	);
}
