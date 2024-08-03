import { Button, InputNumber, Flex } from "antd";
import Typography from "antd/es/typography/Typography";
import { useState } from "react";

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
		</>
	);
}
