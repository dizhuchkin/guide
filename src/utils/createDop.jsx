import { Flex, Button } from "antd";
import Link from "antd/es/typography/Link";
import {
	customHooksData,
	hrefData,
	librariesData,
	practicesData,
	questionData,
} from "../data";
import Typography from "antd/es/typography/Typography";

const { Text } = Typography;

const codeStyle = {
	textAlign: "left",
	minWidth: "150px",
	backgroundColor: "#f4f4f4",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
	textWrap: "wrap",
};

function createCustomHooksList() {
	return customHooksData.map((item) => {
		return {
			key: item.key,
			label: item.label,
			children: (
				<>
					{item.description.map((itemDest) => (
						<div key={item.description.indexOf(itemDest)}>
							{itemDest.type === "text" && (
								<Typography.Paragraph
									style={{ textAlign: "left" }}
								>
									{itemDest.text}
								</Typography.Paragraph>
							)}
							{itemDest.type === "code" && (
								<pre style={codeStyle}>{itemDest.text}</pre>
							)}
						</div>
					))}
				</>
			),
		};
	});
}

function createPracticesList() {
	return practicesData.map((item) => {
		return {
			key: item.key,
			label: item.label,
			children: (
				<>
					<Typography.Paragraph style={{ textAlign: "left" }}>
						{item.description.text}
					</Typography.Paragraph>
					<Flex vertical>
						<Text strong type="danger">
							Плохо
						</Text>
						<pre style={codeStyle}>{item.description.bad}</pre>
						<Text strong type="success">
							Хорошо
						</Text>
						<pre style={codeStyle}>{item.description.good}</pre>
					</Flex>
				</>
			),
		};
	});
}
function creatLibrariesList() {
	return librariesData.map((item) => {
		return {
			key: item.key,
			label: item.label,
			children: (
				<>
					<Typography.Paragraph>
						{item.description}
					</Typography.Paragraph>
					<Flex justify="center" gap="small">
						{item.href.map((itemHref) => (
							<div key={item.href.indexOf(itemHref)}>
								<Link target="_blanks" href={itemHref.link}>
									<Button>{itemHref.name}</Button>
								</Link>
							</div>
						))}
					</Flex>
				</>
			),
		};
	});
}

function createQuestion(topic) {
	return questionData.get(topic).map((item) => {
		return {
			key: item.key,
			label: item.text,
			children: (
				<>
					<span
						style={{
							whiteSpace: "pre-wrap",
							textAlign: "left",
							display: "block",
						}}
					>
						{item.answer}
					</span>
				</>
			),
		};
	});
}

export default function createContentDop(params) {
	const data = {
		href: hrefData.get(params),
		content: null,
	};

	const questionTopic = ["html", "css", "js", "react", "web", "git"];

	if (questionTopic.includes(params)) {
		data.content = createQuestion(params);
	} else {
		switch (params) {
			case "practices":
				data.content = createPracticesList();
				break;
			case "libraries":
				data.content = creatLibrariesList();
				break;
			case "other":
				data.content = createCustomHooksList();
				break;
			default:
				break;
		}
	}

	return data;
}
