import { Button, List, Space, Card } from "antd";
import Link from "antd/es/typography/Link";
import Typography from "antd/es/typography/Typography";

const { Text } = Typography;

const data = [
	"Когда нужно мемоизировать результаты дорогостоящих вычислений.",
	"Когда нужно избегать ненужных повторных вычислений данных.",
];

export default function UseMemoTheory() {
	return (
		<Space
			direction="vertical"
			size="middle"
			style={{ display: "flex", marginTop: 10 }}
		>
			<Card title="Теория">
				<Typography.Paragraph style={{ textAlign: "left" }}>
					Хук <Text code>useMemo()</Text> — это хук в React, который
					возвращает мемоизированное значение, т.е. значение, которое
					будет пересчитываться только тогда, когда изменяются его
					зависимости. Это полезно для оптимизации производительности
					в компонентах, которые выполняют дорогостоящие вычисления.
				</Typography.Paragraph>
				<Link
					target="_blanks"
					href="https://my-js.org/docs/cheatsheet/react-hooks/#usememo"
				>
					<Button type="primary">Дополнительно</Button>
				</Link>
				<br />
				<br />
				<Link
					target="_blanks"
					href="https://stackoverflow.com/questions/55952847/usecallback-vs-usememo-and-when-to-use-them"
				>
					<Button type="primary">
						Разность между useCallback и useMemo
					</Button>
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
