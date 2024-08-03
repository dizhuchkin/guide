import { Button, Divider, InputNumber, Flex, Space } from "antd";
import Typography from "antd/es/typography/Typography";
import { useState, useRef, useEffect } from "react";

const codeStyle = {
	textAlign: "left",
	minWidth: "150px",
	backgroundColor: "#f4f4f4",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
};

export default function UseRefPractice() {
	const obj1 = { hi: 100 };
	const obj2 = useRef({ hi: 100 });

	const [state, setState] = useState(() => {
		return 1;
	});

	useEffect(() => {
		console.log("obj1 changed | ", obj1);
	}, [obj1]);

	useEffect(() => {
		console.log("obj2 changed | ", obj2.current);
	}, [obj2]);

	const inputEl = useRef(null);

	return (
		<>
			<Typography.Title level={3}>
				Пример (useEffect и useRefs)
			</Typography.Title>
			<Flex
				style={{ width: 200, margin: "auto" }}
				align="center"
				vertical
			>
				<InputNumber
					value={state}
					disabled
					style={{ marginBottom: 10 }}
				/>
				<Button
					onClick={() => {
						setState((value) => {
							return value + 1;
						});
					}}
					type="primary"
				>
					Count++
				</Button>
			</Flex>
			<Divider />
			<Typography.Title level={3}>
				Пример (Обычный случай использования)
			</Typography.Title>
			<Flex
				style={{ width: 200, margin: "auto" }}
				align="center"
				vertical
			>
				<InputNumber
					ref={inputEl}
					value={state}
					style={{ marginBottom: 10 }}
				/>
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
			<Typography.Title level={3}>Код</Typography.Title>
			<Space style={{ marginBottom: 10 }} direction="vertical">
				<pre style={codeStyle}>{`
const obj1 = { hi: 100 };
const obj2 = useRef({ hi: 100 });

const [state, setState] = useState(() => {
	return 1;
});

useEffect(() => {
	console.log("obj1 changed | ", obj1);
}, [obj1]);

useEffect(() => {
	console.log("obj2 changed | ", obj2.current);
}, [obj2]);

const inputEl = useRef(null);
------------------------------------
<Button
	onClick={() => {
		setState((value) => {
			return value + 1;
		});
	}}
	type="primary"
>
	Count++
</Button>

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
			</Space>
		</>
	);
}
