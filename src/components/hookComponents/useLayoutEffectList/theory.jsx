import { Button, Divider, List } from "antd";
import Link from "antd/es/typography/Link";
import Typography from "antd/es/typography/Typography";

const { Text } = Typography;

const data = [
	"Когда нужно измерить размеры элемента сразу после его рендеринга, и эти размеры будут использоваться для других вычислений или эффектов.",
	"Когда нужно обновить CSS анимацию или другие стили на основе размеров или состояния элемента после его рендеринга.",
	"Когда нужно обновить состояние компонента на основе размера или положения элемента, но до того, как браузер выполнит рендеринг.",
];

export default function UseLayoutEffectTheory() {
	return (
		<>
			<Typography.Title level={3}>Теория</Typography.Title>
			<Typography.Paragraph style={{ textAlign: "left" }}>
				Хук <Text code>useLayoutEffect()</Text> похож на хук{" "}
				<Text code>useEffect()</Text>, за исключением того, что он
				запускает эффект перед отрисовкой компонента. Данный хук
				предназначен для запуска эффектов, влияющих на внешний вид DOM,
				незаметно для пользователя. Эта функция имеет такую же
				сигнатуру, что и <Text code>useEffect()</Text>
			</Typography.Paragraph>
			<Link
				target="_blanks"
				href="https://my-js.org/docs/cheatsheet/react-hooks/#uselayouteffect"
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
