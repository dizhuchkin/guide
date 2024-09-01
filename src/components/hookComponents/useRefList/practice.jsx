import { Button, InputNumber, Flex, Timeline, Space, Card } from "antd";
import { useState, useRef, useEffect } from "react";

const codeStyle = {
	textAlign: "left",
	minWidth: "150px",
	backgroundColor: "#f4f4f4",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
	textWrap: "wrap",
};

export default function UseRefPractice() {
	const [obj1, setObj1] = useState(1);
	const obj2 = useRef(1);
	const [log, setLog] = useState([]);

	function addLog(text) {
		setLog((value) => {
			return [
				...value,
				{ label: new Date().toLocaleTimeString(), children: text },
			];
		});
	}

	useEffect(() => {
		addLog("useState obj1 changed | ", obj1);
	}, [obj1]);

	useEffect(() => {
		addLog("useRef obj2 changed | ", obj2.current);
	}, [obj2]);

	const inputEl = useRef(null);

	return (
		<Space
			direction="vertical"
			size="middle"
			style={{ display: "flex", marginTop: 10 }}
		>
			<Card title="Пример (useState и useRefs)">
				<Flex
					style={{ width: 200, margin: "auto" }}
					align="center"
					vertical
				>
					<InputNumber
						suffix="useState"
						value={obj1}
						disabled
						style={{ marginBottom: 10, width: 200 }}
					/>
					<InputNumber
						suffix="useRef"
						value={obj2.current}
						disabled
						style={{ marginBottom: 10, width: 200 }}
					/>
					<Button
						onClick={() => {
							setObj1((value) => {
								return value + 1;
							});

							obj2.current += 1;
						}}
						type="primary"
					>
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
const [obj1, setObj1] = useState(1);
const obj2 = useRef(1);

useEffect(() => {
	console.log("obj1 changed | ", obj1);
}, [obj1]);

useEffect(() => {
	console.log("obj2 changed | ", obj2.current);
}, [obj2]);

<---------------------------------------------------->

<InputNumber
	value={obj1}
	disabled
	style={{ marginBottom: 10 }}
/>
<InputNumber
	value={obj2.current}
	disabled
	style={{ marginBottom: 10 }}
/>
<Button
	onClick={() => {
		setObj1((value) => {
			return value + 1;
		});

		obj2.current += 1;
	}}
	type="primary"
>
	Count++
</Button>
	`}</pre>
			</Card>

			<Card title="Пример (Обычный случай использования)">
				<Flex
					style={{ width: 200, margin: "auto" }}
					align="center"
					vertical
				>
					<InputNumber ref={inputEl} style={{ marginBottom: 10 }} />
					<Button
						onClick={() => {
							// `current` указывает на смонтированный элемент `input`
							if (inputEl.current) {
								inputEl.current.focus();
							}
						}}
						type="primary"
					>
						Count++
					</Button>
				</Flex>
			</Card>

			<Card title="Код">
				<pre style={codeStyle}>{`
const inputEl = useRef(null);

<---------------------------------------------------->

<InputNumber ref={inputEl} style={{ marginBottom: 10 }} />
<Button
	onClick={() => {
		// current указывает на смонтированный элемент input
		if (inputEl.current) {
			inputEl.current.focus();
		}
	}}
	type="primary"
>
	Count++
</Button>
	`}</pre>
			</Card>
		</Space>
	);
}
