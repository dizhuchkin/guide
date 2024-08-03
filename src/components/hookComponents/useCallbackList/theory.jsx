import { Button, Divider, List } from "antd";
import Link from "antd/es/typography/Link";
import Typography from "antd/es/typography/Typography";
import React from "react";

const { Text } = Typography;

const data = [
	"Когда нужно предотвратить ненужные рендеры дочерних компонентов, передавая мемоизированные функции в качестве пропсов.",
	"Когда нужно передать мемоизированную функцию в зависимость хука useEffect.",
	"Когда нужно передать мемоизированную функцию в обработчик событий для предотвращения создания новой функции при каждом рендере.",
];

export default function UseCallbackTheory() {
	return (
		<>
			<Typography.Title level={3}>Теория</Typography.Title>
			<Typography.Paragraph style={{ textAlign: "left" }}>
				Хук <Text code>useCallback()</Text> возвращает мемоизированную
				версию переданной функции обратного вызова. Данный хук принимает
				колбек и массив зависимостей. колбек повторно вычисляется только
				при изменении значений одной из зависимостей. useCallback
				принимает в себя функцию и массив зависимостей, также как и
				useEffect.
				<br />
				Мемоизация функции означает сохранение её результатов или самой
				функции для предотвращения повторного выполнения той же операции
				или создания новой функции с теми же зависимостями. Это помогает
				оптимизировать производительность, особенно когда функция или
				результат её выполнения требуют значительных вычислительных
				ресурсов или создаются заново без необходимости.
				<br />В React мемоизация часто используется для функций, чтобы
				они не создавались заново при каждом рендере компонента, если их
				зависимости не изменились. Это особенно важно, когда функция
				передается в качестве пропса в дочерние компоненты, так как
				изменение функции может привести к ненужным рендерам этих
				дочерних компонентов.
			</Typography.Paragraph>
			<Link
				target="_blanks"
				href="https://my-js.org/docs/cheatsheet/react-hooks/#usecallback"
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
