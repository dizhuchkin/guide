import { Button, Divider, InputNumber, Flex, List } from "antd";
import Link from "antd/es/typography/Link";
import Typography from "antd/es/typography/Typography";
import { useReducer } from "react";

const { Text } = Typography;

const buttonStyle = {
	width: 100,
	marginBottom: 5,
};

const data = [
	"Когда нужно управлять сложным состоянием с несколькими значениями.",
	"Когда нужно использовать логику редюсера для управления состоянием.",
];

export default function UseReducerTheory() {
	return (
		<>
			<Typography.Title level={3}>Теория</Typography.Title>
			<Typography.Paragraph>
				Хук <Text code>useReducer()</Text>, как и хук{" "}
				<Text code>useState()</Text>, предназначен для управления
				состоянием. Он используется при наличии сложной логики
				управления состоянием или когда следующее состояние зависит от
				предыдущего. useReducer() принимает редуктор (reducer),
				обновляющий состояние на основе типа (type) и, опционально,
				полезной нагрузки (payload) переданной операции (action).
			</Typography.Paragraph>
			<Link
				target="_blanks"
				href="https://my-js.org/docs/cheatsheet/react-hooks/#usereducer"
			>
				<Button type="primary">Дополнительно</Button>
			</Link>
			<Divider />
			<Typography.Title level={3}>Когда использовать</Typography.Title>
			<List
				size="small"
				bordered
				dataSource={data}
				renderItem={(item) => <List.Item>{item}</List.Item>}
			/>
		</>
	);
}
