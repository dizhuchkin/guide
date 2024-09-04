import { Button, List, Space, Card } from "antd";
import Link from "antd/es/typography/Link";
import Typography from "antd/es/typography/Typography";

const { Text } = Typography;

const data = [
	"Когда нужно управлять состоянием в функциональном компоненте.",
	"Когда нужно инициализировать и изменять значение состояния.",
];

export default function UseStateTheory() {
	return (
		<Space
			direction="vertical"
			size="middle"
			style={{ display: "flex", marginTop: 10 }}
		>
			<Card title="Теория">
				<Typography.Paragraph style={{ textAlign: "left" }}>
					Хук <Text code>useState()</Text> предназначен для управления
					состоянием компонента. Данная функция возвращает пару
					геттер/сеттер - значение начального состояния и функцию для
					обновления этого значения. Функцию имеет следующую
					сигнатуру:
					<Text code>
						const [value, setValue] = useState(defaultValue)
					</Text>
					.
				</Typography.Paragraph>
				<Link
					target="_blanks"
					href="https://my-js.org/docs/cheatsheet/react-hooks/#usestate"
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
