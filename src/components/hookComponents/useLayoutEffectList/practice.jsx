import { Empty, Flex } from "antd";
import Typography from "antd/es/typography/Typography";

export default function UseLayoutEffectPractice() {
	return (
		<>
			<Typography.Title level={3}>Пример</Typography.Title>

			<Flex
				style={{ width: 200, margin: "auto" }}
				align="center"
				vertical
			>
				<Empty />
			</Flex>
		</>
	);
}
