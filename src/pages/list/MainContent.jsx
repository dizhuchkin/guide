import { useSelector } from "react-redux";
import { Flex, Button, List, Card, Image } from "antd";
import { useNavigate } from "react-router-dom";
import codewars from "../../data/photo/codewars48.png";
import stepic from "../../data/photo/stepic48.png";
import yandex from "../../data/photo/yandex48.png";
import html from "../../data/photo/html48.png";
import js from "../../data/photo/js48.png";
import solvit from "../../data/photo/solvit48.png";
import devStation from "../../data/photo/devStation48.png";
import Link from "antd/es/typography/Link";

/*
gutter: Задает отступ (в пикселях) между элементами списка.
xs: Определяет количество колонок, когда ширина экрана соответствует маленьким устройствам (размер XS, обычно менее 576 пикселей).
sm: Определяет количество колонок, когда ширина экрана соответствует малым устройствам (размер SM, обычно 576-767 пикселей).
md: Определяет количество колонок, когда ширина экрана соответствует средним устройствам (размер MD, обычно 768-991 пиксель).
lg: Определяет количество колонок, когда ширина экрана соответствует большим устройствам (размер LG, обычно 992-1199 пикселей).
xl: Определяет количество колонок, когда ширина экрана соответствует очень большим устройствам (размер XL, обычно 1200-1599 пикселей).
xxl: Определяет количество колонок, когда ширина экрана соответствует экстрабольшим устройствам (размер XXL, обычно более 1600 пикселей).
*/

const linksIcon = [
	{
		key: 1,
		link: "https://www.codewars.com/",
		icon: codewars,
	},
	{
		key: 2,
		link: "https://stepik.org/catalog",
		icon: stepic,
	},
	{
		key: 3,
		link: "https://coderun.yandex.ru/",
		icon: yandex,
	},
	{
		key: 4,
		link: "https://webref.ru/practice",
		icon: html,
	},
	{
		key: 5,
		link: "https://my-js.netlify.app/docs/other/snippets-js/",
		icon: js,
	},
	{
		key: 6,
		link: "https://solvit.space/",
		icon: solvit,
	},
	{
		key: 7,
		link: "https://dev-station.ru/simulator/js",
		icon: devStation,
	},
];

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
		{
			title: "Ссылки",
			description: (
				<Flex wrap gap="small">
					{linksIcon.map((i) => (
						<Link key={i.key} target="_blank" href={i.link}>
							<Image preview={false} src={i.icon} />
						</Link>
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
