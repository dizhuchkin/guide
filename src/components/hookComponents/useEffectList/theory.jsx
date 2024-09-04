import Typography from "antd/es/typography/Typography";
import { Button, List, Space, Card } from "antd";
import Link from "antd/es/typography/Link";

const { Text } = Typography;

const data = [
	"массив не указан: эффект запускается при каждом рендеринге",
	"указан пустой массив: эффект запускается только один раз",
	"указан массив с элементами: эффект запускается при изменении любого элемента",
];

const use = [
	"Когда нужно выполнять побочные эффекты в компоненте.",
	"Когда нужно выполнять действия после рендера, например, получение данных, подписки или изменение DOM.",
];

export default function UseEffectTheory() {
	return (
		<Space
			direction="vertical"
			size="middle"
			style={{ display: "flex", marginTop: 10 }}
		>
			<Card title="Теория">
				<Typography.Paragraph style={{ textAlign: "left" }}>
					<Text code>Хук useEffect()</Text> предназначен для запуска
					побочных эффектов (например, выполнение сетевого запроса или
					добавление обработчика событий) после монтирования и
					отрисовки компонента. Данная функция принимает колбек и
					массив зависимостей. Что касается массива зависимостей, то
					логика следующая:
				</Typography.Paragraph>
				<List
					size="small"
					bordered
					dataSource={data}
					renderItem={(item) => <List.Item>{item}</List.Item>}
				/>
				<br />
				<Typography.Paragraph style={{ textAlign: "left" }}>
					Внутри useEffect всегда можно вернуть функцию очистки,
					которая используется для удаления нежелательного поведения.
				</Typography.Paragraph>
				<Link
					target="_blanks"
					href="https://my-js.org/docs/cheatsheet/react-hooks/#useeffect"
				>
					<Button type="primary">Дополнительно</Button>
				</Link>
			</Card>
			<Card title="Когда использовать">
				<List
					size="small"
					bordered
					dataSource={use}
					renderItem={(item) => <List.Item>{item}</List.Item>}
				/>
			</Card>
		</Space>
	);
}
