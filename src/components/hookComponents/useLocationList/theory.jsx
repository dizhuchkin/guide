import { Button, Divider, List } from "antd";
import Link from "antd/es/typography/Link";
import Typography from "antd/es/typography/Typography";

const { Text } = Typography;

const data = [
	{
		title: "pathname:",
		content:
			"строка, представляющая текущий путь URL. (Пример: Если http://example.com/about -> /about)",
	},
	{
		title: "search:",
		content:
			"строка, представляющая строку запроса в URL (включая ведущий ?). (Пример: Если http://example.com/about?name=John&age=30 -> ?name=John&age=30)",
	},
	{
		title: "hash:",
		content:
			"строка, представляющая якорь (фрагмент URL, включая ведущий #). (Пример: Если http://example.com/about#section2 -> #section2)",
	},
	{
		title: "state:",
		content:
			"объект, представляющий состояние, переданное вместе с переходом (например, с помощью history.push или history.replace). (Пример: Если history.push('/about', { from: 'Home' }) -> { from: Home' }",
	},
	{
		title: "key:",
		content:
			"строка, уникальный ключ для текущего location, который может быть полезен для идентификации переходов. (Пример: Если http://example.com/about -> 'ac3df4')",
	},
];

const use = [
	"Когда нужно получить и отобразить текущий путь URL.",
	"Когда нужно получить параметры строки запроса из URL.",
	"Когда нужно получить фрагмент (якорь) из URL.",
	"Когда нужно получить состояние, переданное через navigate.",
	"Когда нужно логировать изменения URL или выполнять действия при изменении маршрута.",
];

export default function UseLocationTheory() {
	return (
		<>
			<Typography.Title level={3}>Теория</Typography.Title>
			<Typography.Paragraph>
				<Text code>useLocation</Text> возвращает объект, представляющий
				текущий URL. Этот объект содержит информацию о текущем пути,
				строке запроса и других свойствах. Хук useLocation возвращает
				объект location, который содержит свойства pathname, search,
				hash, state и другие, предоставляющие информацию о текущем
				маршруте.
				<br />
				Свойства объекта location pathname:
			</Typography.Paragraph>
			<List
				size="small"
				bordered
				title="Заголовок"
				dataSource={data}
				renderItem={(item) => (
					<List.Item>
						<List.Item.Meta
							title={item.title}
							description={item.content}
						/>
					</List.Item>
				)}
			/>
			<br />
			<Link
				target="_blanks"
				href="https://my-js.org/docs/guide/react-router/#uselocation"
			>
				<Button type="primary">Дополнительно</Button>
			</Link>
			<Divider />
			<Typography.Title level={3}>Когда использовать</Typography.Title>
			<List
				size="small"
				bordered
				dataSource={use}
				renderItem={(item) => <List.Item>{item}</List.Item>}
			/>
		</>
	);
}
