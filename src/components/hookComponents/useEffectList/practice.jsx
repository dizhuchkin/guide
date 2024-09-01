import { Button, InputNumber, Flex, Timeline, Space, Card } from "antd";
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
	const [log, setLog] = useState([]);

	function click() {
		setCount((value) => {
			return value + 1;
		});
	}

	function addLog(text) {
		setLog((value) => {
			return [
				...value,
				{ label: new Date().toLocaleTimeString(), children: text },
			];
		});
	}

	// Срабатывает при первом рендере
	useEffect(() => {
		addLog("Срабатывает один раз при первом рендере ");
	}, []);

	// Зависит от элементов
	useEffect(() => {
		addLog(`Запуск эффекта ${count}`);

		return () => {
			addLog(`Очистка эффекта ${count}`);
		};
	}, [count]);

	return (
		<Space
			direction="vertical"
			size="middle"
			style={{ display: "flex", marginTop: 10 }}
		>
			<Card title="Пример">
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
			</Card>

			<Card title="Вывод">
				<Timeline
					style={{
						overflowX: "hidden",
						height: 400,
						overflowY: "scroll",
					}}
					mode="left"
					items={log}
				/>
			</Card>

			<Card title="Код">
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
			</Card>
		</Space>
	);
}
