import { Button, InputNumber, Flex, Timeline } from "antd";
import Typography from "antd/es/typography/Typography";
import { useState, useMemo, useEffect } from "react";

const buttonStyle = {
	marginBottom: 10,
	width: 100,
};

const codeStyle = {
	textAlign: "left",
	minWidth: "150px",
	backgroundColor: "#f4f4f4",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
	textWrap: "wrap",
};

function factorialOf(n) {
	return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default function UseMemoPractice() {
	const [number, setNumber] = useState(2);
	const [count, setCount] = useState(2);
	const [log, setLog] = useState([]);

	function addLog(text) {
		setLog((value) => {
			return [...value, { children: text }];
		});
	}

	useEffect(() => {
		addLog("Render");
	}, [count]);

	const factorial = useMemo(() => {
		addLog("factorialOf(n) called!");
		return factorialOf(number);
	}, [number]);

	return (
		<>
			<Typography.Title level={3}>Пример</Typography.Title>
			<Typography.Paragraph>
				Для примера, нам нужно найти факториал, и пересчитывать значение
				только тогда, когда значение изменится, а не при каждой
				перерисовке компонента, чтож давайте попробуем использовать
				useMemo.
			</Typography.Paragraph>
			<Flex
				style={{ width: 200, margin: "auto" }}
				align="center"
				vertical
			>
				<InputNumber
					value={factorial}
					disabled
					style={{ marginBottom: 10 }}
				/>
				<InputNumber
					value={count}
					disabled
					style={{ marginBottom: 10 }}
				/>
				<Button
					style={buttonStyle}
					onClick={() => setNumber(count)}
					type="primary"
				>
					Count!
				</Button>
				<Button
					style={buttonStyle}
					onClick={() => setCount(count + 1)}
					type="primary"
				>
					Count++
				</Button>
			</Flex>
			<Typography.Title level={3}>Вывод</Typography.Title>
			<br />
			<Timeline items={log} />
			<Typography.Title level={3}>Код</Typography.Title>

			<pre style={codeStyle}>{`
function factorialOf(n) {
	console.log("factorialOf(n) called!");
	return n <= 0 ? 1 : n * factorialOf(n - 1);
}

const [number, setNumber] = useState(2);
const factorial = useMemo(() => factorialOf(number), [number]);
const [count, setCount] = useState(0);

useEffect(() => {
	console.log("Render");
});

<---------------------------------------------------->

<Button
	style={buttonStyle}
	onClick={() => setNumber(number + 1)}
	type="primary"
>
	Number++
</Button>
<Button
	style={buttonStyle}
	onClick={() => setCount(count + 1)}
	type="primary"
>
	Count++
</Button>
	`}</pre>
		</>
	);
}
