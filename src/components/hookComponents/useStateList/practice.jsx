import { Button, InputNumber, Flex, Card, Space } from "antd";
import { useState } from "react";

const codeStyle = {
	textAlign: "left",
	minWidth: "150px",
	backgroundColor: "#f4f4f4",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
	textWrap: "wrap",
};

export default function UseStatePractice() {
	const [count, setCount] = useState(0);

	function click() {
		setCount((value) => {
			return value + 1;
		});
	}

	return (
		<Space
			direction="vertical"
			size="middle"
			style={{ display: "flex", marginTop: 10 }}
		>
			<Card title="Пример (Счётчик)">
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
			<Card title="Код">
				<pre style={codeStyle}>{`
const [count, setCount] = useState(0);
function click() {
	setCount((value) => {
		return value + 1;
	});
}

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
