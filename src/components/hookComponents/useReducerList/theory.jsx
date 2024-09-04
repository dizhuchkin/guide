import { Button, List, Space, Card } from "antd";
import Link from "antd/es/typography/Link";
import Typography from "antd/es/typography/Typography";

const { Text } = Typography;

const data = [
	"Когда нужно управлять сложным состоянием с несколькими значениями.",
	"Когда нужно использовать логику редюсера для управления состоянием.",
];

export default function UseReducerTheory() {
	return (
		<Space
			direction="vertical"
			size="middle"
			style={{ display: "flex", marginTop: 10 }}
		>
			<Card title="Теория">
				<Typography.Paragraph style={{ textAlign: "left" }}>
					Хук <Text code>useReducer()</Text>, как и хук
					<Text code>useState()</Text>, предназначен для управления
					состоянием. Он используется при наличии сложной логики
					управления состоянием или когда следующее состояние зависит
					от предыдущего. useReducer() принимает редуктор (reducer),
					обновляющий состояние на основе типа (type) и, опционально,
					полезной нагрузки (payload) переданной операции (action).
				</Typography.Paragraph>
				<Link
					target="_blanks"
					href="https://my-js.org/docs/cheatsheet/react-hooks/#usereducer"
				>
					<Button type="primary">Дополнительно</Button>
				</Link>
			</Card>

			<Card title="Когда использовать">
				<List
					size="small"
					bordered
					dataSource={data}
					renderItem={(item) => <List.Item>{item}</List.Item>}
				/>
			</Card>
		</Space>
	);
}
