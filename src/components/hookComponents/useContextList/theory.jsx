import { Button, Divider, List } from "antd";
import Link from "antd/es/typography/Link";
import Typography from "antd/es/typography/Typography";

const { Text } = Typography;

const use = [
	"Когда нужно получать доступ к контексту в функциональных компонентах.",
	"Когда нужно делиться состоянием или функциями между компонентами без необходимости пропс-дриллинга.",
];

export default function UseContextTheory() {
	return (
		<>
			<Typography.Title level={3}>Теория</Typography.Title>
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
