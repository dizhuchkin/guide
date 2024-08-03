import { Button, InputNumber, Flex } from "antd";
import Typography from "antd/es/typography/Typography";
import { useState } from "react";
import { Space } from "antd";

const codeStyle = {
	textAlign: "left",
	minWidth: "150px",
	backgroundColor: "#f4f4f4",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
};

export default function UseStatePractice() {
	const [count, setCount] = useState(0);

	function click() {
		setCount((value) => {
			return value + 1;
		});
	}

	return (
		<>
			<Typography.Title level={3}>Пример (Счётчик)</Typography.Title>
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
const [count, setCount] = useState(0);
function click() {
	setCount((value) => {
		return value + 1;
	});
}
------------------------------------
<Button onClick={click} type="primary">
	Count++
</Button>
	`}</pre>
			</Space>
		</>
	);
}
