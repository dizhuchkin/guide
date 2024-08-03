import { Button, Divider, List } from "antd";
import Link from "antd/es/typography/Link";
import Typography from "antd/es/typography/Typography";

const { Text } = Typography;

const data = [
	"Когда нужно получить параметры из текущего маршрута и использовать их в компоненте.",
	"Когда нужно использовать параметры для отображения динамического контента на основе URL.",
	"Когда нужно загрузить данные с сервера на основе параметров из URL.",
];

export default function UseParamsTheory() {
	return (
		<>
			<Typography.Title level={3}>Теория</Typography.Title>
			<Typography.Paragraph>
				Данный хук возвращает объект с параметрами URL в формате
				<Text code>ключ: значение</Text>. Используется для доступа к
				<Text code>match.params</Text> текущего
				<Text code>{`<Route>`}</Text>:
			</Typography.Paragraph>
			<Link
				target="_blanks"
				href="https://my-js.org/docs/guide/react-router"
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
