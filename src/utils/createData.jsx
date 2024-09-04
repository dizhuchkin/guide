import { useSelector } from "react-redux";
import { Flex, Button, Image } from "antd";
import { useNavigate } from "react-router-dom";
import Link from "antd/es/typography/Link";
import { linksData } from "../data";

export default function DataMain() {
	const listTopic = useSelector((state) => state.topic.topic);
	const navigate = useNavigate();

	return [
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
			title: "Практика",
			description: (
				<Flex wrap gap="small">
					{linksData.map((i) => (
						<Link key={i.key} target="_blank" href={i.link}>
							<Image preview={false} src={i.icon} />
						</Link>
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
	];
}
