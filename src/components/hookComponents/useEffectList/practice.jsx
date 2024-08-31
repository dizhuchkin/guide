import Typography from "antd/es/typography/Typography";
import { Button, InputNumber, Flex } from "antd";
import { useState, useEffect } from "react";

const codeStyle = {
	textAlign: "left",
	minWidth: "150px",
	backgroundColor: "#f4f4f4",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
	textWrap: "wrap",
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
		console.log("Срабатывает один раз при первом рендере ");
	}, []);

	// Зависит от элементов
	useEffect(() => {
		console.log(`Запуск эффекта ${count}`);

		return () => {
			console.log(`Очистка эффекта ${count}`);
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

			<pre style={codeStyle}>{`
const [count, setCount] = useState(0);

// Срабатывает при первом рендере
useEffect(() => {
	console.log("Срабатывает при первом рендере");
}, []);

// Зависит от элементов
useEffect(() => {

	console.log('Запуск эффекта');

	return () => {
		console.log(Очистка эффекта);
	};
}, [count]);

<---------------------------------------------------->

<InputNumber value={count}/>

<Button onClick={click} type="primary">
	Count++
</Button>
	`}</pre>
		</>
	);
}
