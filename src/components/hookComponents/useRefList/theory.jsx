import { Button, List, Space, Card } from "antd";
import Link from "antd/es/typography/Link";
import Typography from "antd/es/typography/Typography";

const { Text } = Typography;

const data = [
	{
		title: "Доступ к DOM-элементам:",
		content:
			"useRef часто используется для доступа и взаимодействия с DOM-элементами напрямую. Это полезно, когда вам нужно работать с элементами в стиле, подобном работе с document.querySelector в чистом JavaScript.",
	},
	{
		title: "Хранение мутирующих значений:",
		content:
			"useRef также можно использовать для хранения значений, которые могут изменяться, но не должны вызывать повторный рендер компонента. Например, для хранения таймеров, счетчиков и других значений, которые должны сохраняться между рендерами, но не влиять на них.",
	},
	{
		title: "Не вызывает повторный рендер:",
		content:
			"Изменение значения свойства current объекта, возвращаемого useRef, не вызывает повторный рендер компонента. Сохранение значения между рендерами: Значение, сохранённое в useRef, сохраняется между рендерами компонента.",
	},
];

const use = [
	"Когда нужно получить доступ к DOM-элементу или сохранить значение между рендерами.",
	"Когда нужно хранить мутируемое значение, которое не вызывает рендер при изменении.",
];

export default function UseRefTheory() {
	return (
		<Space
			direction="vertical"
			size="middle"
			style={{ display: "flex", marginTop: 10 }}
		>
			<Card title="Теория">
				<Typography.Paragraph style={{ textAlign: "left" }}>
					Хук <Text code>useRef()</Text> возвращает объект, свойство
					current которого содержит ссылку на узел DOM. Данный хук
					также может использоваться для сохранения любого мутирующего
					значения. Создание хука:{" "}
					<Text code>const node = useRef()</Text>. Добавление ссылки:{" "}
					<Text code>{`<tagName ref={node}></tagName>`}</Text>.
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
				<Typography.Paragraph style={{ textAlign: "left" }}>
					useRef возвращает изменяемый ref объект, в котором значение
					“current” устанавливается переданным аргументом при
					инициализации (initialValue). Возвращенный объект будет
					сохранен на протяжении всей жизни компонента.
				</Typography.Paragraph>
				<Typography.Paragraph style={{ textAlign: "left" }}>
					Когда вы сравнивает обычный объект с самим собой в
					useEffect, то после перерисовки они не совпадают, и это
					запускает срабатывание useEffect, с useRef такого не
					происходит (если он не изменился, то не перерисовывается)
				</Typography.Paragraph>
				<Link
					target="_blanks"
					href="https://my-js.org/docs/cheatsheet/react-hooks/#useref"
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
