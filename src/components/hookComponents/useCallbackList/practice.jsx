import { Button, InputNumber, Flex, Timeline, Space, Card } from "antd";
import Typography from "antd/es/typography/Typography";
import { useState, useCallback, useEffect } from "react";
import React from "react";

const codeStyle = {
	textAlign: "left",
	minWidth: "150px",
	backgroundColor: "#f4f4f4",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
	textWrap: "wrap",
};

const ChildA = React.memo(({ state1, handleClickA, addLog }) => {
	useEffect(() => {
		addLog(`Render A`);
	}, [addLog]);

	return (
		<>
			<InputNumber value={state1} disabled style={{ marginBottom: 10 }} />
			<Button onClick={handleClickA} type="primary">
				handleClickA
			</Button>
		</>
	);
});

const ChildB = React.memo(({ state2, handleClickB, addLog }) => {
	useEffect(() => {
		addLog(`Render B`);
	}, [addLog]);

	return (
		<>
			<InputNumber value={state2} disabled style={{ marginBottom: 10 }} />
			<Button onClick={handleClickB} type="primary">
				handleClickB
			</Button>
		</>
	);
});

export default function UseCallbackPractice() {
	const [state1, setState1] = useState(0);
	const [state2, setState2] = useState(0);
	const [log, setLog] = useState([]);

	const addLog = useCallback((text) => {
		setLog((value) => {
			return [
				...value,
				{ label: new Date().toLocaleTimeString(), children: text },
			];
		});
	}, []);

	const handleClickA = useCallback(() => {
		addLog(`Clicked A with state1: ${state1}`);
		setState1(state1 + 1);
	}, [addLog, state1]);

	const handleClickB = useCallback(() => {
		addLog(`Clicked B with state2: ${state2}`);
		setState2(state2 + 1);
	}, [addLog, state2]);

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
					<ChildA
						state1={state1}
						handleClickA={handleClickA}
						addLog={addLog}
					/>
					<br />
					<ChildB
						state2={state2}
						handleClickB={handleClickB}
						addLog={addLog}
					/>
				</Flex>
				<Typography.Paragraph>
					Без мемоизации функции, такие как handleClickA и
					handleClickB, создаются заново при каждом рендере
					родительского компонента, что может приводить к ненужным
					рендерам дочерних компонентов. React.memo позволяет
					перерисовывать компонет только тогда, когда изменяются props
				</Typography.Paragraph>
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
const handleClickA = useCallback(() => {
	console.log('Clicked A with state1: ${"state1"}');
	setState1(state1 + 1);
}, [state1]);

const handleClickB = useCallback(() => {
	console.log('Clicked B with state2: ${"state2"}');
	setState2(state2 + 1);
}, [state2]);

<---------------------------------------------------->

<ChildA state1={state1} handleClickA={handleClickA} />

<ChildB state2={state2} handleClickB={handleClickB} />
	`}</pre>
			</Card>
		</Space>
	);
}
