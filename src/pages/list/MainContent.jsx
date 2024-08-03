import { useSelector } from "react-redux";
import { Flex, Button, List, Card } from "antd";
import { useNavigate } from "react-router-dom";

/*
gutter: Задает отступ (в пикселях) между элементами списка.
xs: Определяет количество колонок, когда ширина экрана соответствует маленьким устройствам (размер XS, обычно менее 576 пикселей).
sm: Определяет количество колонок, когда ширина экрана соответствует малым устройствам (размер SM, обычно 576-767 пикселей).
md: Определяет количество колонок, когда ширина экрана соответствует средним устройствам (размер MD, обычно 768-991 пиксель).
lg: Определяет количество колонок, когда ширина экрана соответствует большим устройствам (размер LG, обычно 992-1199 пикселей).
xl: Определяет количество колонок, когда ширина экрана соответствует очень большим устройствам (размер XL, обычно 1200-1599 пикселей).
xxl: Определяет количество колонок, когда ширина экрана соответствует экстрабольшим устройствам (размер XXL, обычно более 1600 пикселей).
*/

export default function MainContent() {
	const listTopic = useSelector((state) => state.topic.topic);
	const navigate = useNavigate();

	const data = [
		{
			title: "Хуки",
			description: (
				<Flex wrap gap="small">
					{listTopic
						.filter((item) => item.key < 12)
						.map((i) => (
							<Button
								onClick={() => navigate(`/hook/${i.label}`)}
								key={i.key}
								type="primary"
							>
								{i.label}
							</Button>
						))}
				</Flex>
			),
		},
		{
			title: "Дополнительно",
			description: (
				<Flex wrap gap="small">
					{listTopic
						.filter((item) => item.key >= 12 && item.key < 16)
						.map((i) => (
							<Button
								onClick={() => navigate(`/dop/${i.label}`)}
								key={i.key}
								type="primary"
							>
								{i.label}
							</Button>
						))}
				</Flex>
			),
		},
		{
			title: "Вопросы",
			description: (
				<Flex wrap gap="small">
					{listTopic
						.filter((item) => item.key >= 16)
						.map((i) => (
							<Button
								onClick={() => navigate(`/dop/${i.label}`)}
								key={i.key}
								type="primary"
							>
								{i.label}
							</Button>
						))}
				</Flex>
			),
		},
	];

	return (
		<List
			grid={{
				gutter: 16,
				xs: 1,
				sm: 1,
				md: 1,
				lg: 1,
				xl: 1,
				xxl: 1,
			}}
			dataSource={data}
			renderItem={(item) => (
				<List.Item>
					<Card title={item.title}>{item.description}</Card>
				</List.Item>
			)}
		/>
	);
}
