import { Divider, List, Button } from "antd";
import Typography from "antd/es/typography/Typography";
import Link from "antd/es/typography/Link";

const { Text } = Typography;

const data = [
	{
		title: "to",
		content: "Строка или объект, указывающие путь для перехода.",
	},
	{
		title: "options",
		content: "Объект с опциями для навигации.",
	},
];

const examples = [
	{
		title: "Навигация по строковому пути:",
		content: "navigate('/home');",
	},
	{
		title: "Навигация с заменой текущего состояния (replace):",
		content: "navigate('/home', { replace: true });",
	},
	{
		title: "Передача состояния через навигацию (state):",
		content: "navigate('/home', { state: { fromDashboard: true } });",
	},
	{
		title: "Относительная навигация (Шаг назад в истории):",
		content: "navigate(-1); ",
	},
	{
		title: "Относительная навигация (Шаг вперёд в истории):",
		content: "navigate(1);",
	},
];

const use = [
	"Когда нужно перенаправить пользователя на другую страницу при клике на кнопку.",
	"Когда нужно передать состояние при навигации на другую страницу.",
	"Когда нужно выполнить навигацию на основе какого-то условия.",
	"Когда нужно вернуться на предыдущую страницу после выполнения действия.",
];

export default function UseNavigateTheory() {
	return (
		<>
			<Typography.Title level={3}>Теория</Typography.Title>
			<Typography.Paragraph>
				<Text code>useNavigate</Text> используется для программной
				навигации между страницами в вашем приложении. Он возвращает
				функцию, которая позволяет вам перемещаться к другим маршрутам,
				подобно вызову history push или history.replace в старых версиях
				React Router.
				<Typography.Title level={5}>
					Функция, возвращаемая useNavigate, может принимать два
					аргумента:
				</Typography.Title>
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
				<Typography.Title level={5}>
					Примеры использования useNavigate:
				</Typography.Title>
			</Typography.Paragraph>
			<List
				size="small"
				bordered
				title="Заголовок"
				dataSource={examples}
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
				href="https://ru.hexlet.io/blog/posts/react-router-v6"
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
