import { Button, Divider, List } from "antd";
import Link from "antd/es/typography/Link";
import Typography from "antd/es/typography/Typography";

const { Text } = Typography;

const data = [
	"Когда нужно управлять состоянием в функциональном компоненте.",
	"Когда нужно инициализировать и изменять значение состояния.",
];

export default function UseStateTheory() {
	return (
		<>
			<Typography.Title level={3}>Теория</Typography.Title>
			<Typography.Paragraph style={{ textAlign: "left" }}>
				Хук <Text code>useState()</Text> предназначен для управления
				состоянием компонента. Данная функция возвращает пару
				геттер/сеттер - значение начального состояния и функцию для
				обновления этого значения. Функцию имеет следующую сигнатуру:
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
