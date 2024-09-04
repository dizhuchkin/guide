import { Button, List, Space, Card } from "antd";
import Link from "antd/es/typography/Link";
import Typography from "antd/es/typography/Typography";

const { Text } = Typography;

const use = [
	"Когда нужно получать доступ к контексту в функциональных компонентах.",
	"Когда нужно делиться состоянием или функциями между компонентами без необходимости пропс-дриллинга.",
];

export default function UseContextTheory() {
	return (
		<Space
			direction="vertical"
			size="middle"
			style={{ display: "flex", marginTop: 10 }}
		>
			<Card title="Теория">
				<Typography.Paragraph style={{ textAlign: "left" }}>
					Хук <Text code>useContext()</Text> предназначен для прямой
					передачи пропов компонентам, находящимся на любом уровне
					вложенности. Он позволяет избежать так называемого "бурения
					пропов" (prop drilling), т.е. необходимости последовательной
					передачи пропов на каждом уровне вложенности.
				</Typography.Paragraph>
				<Link
					target="_blanks"
					href="https://my-js.org/docs/cheatsheet/react-hooks/#usecontext"
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
