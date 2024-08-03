import { Divider, Flex, Button, List } from "antd";
import Link from "antd/es/typography/Link";
import {
	customHooksData,
	hrefData,
	librariesData,
	practicesData,
	questionData,
	typescriptData,
} from "../data";
import Typography from "antd/es/typography/Typography";
import { Space } from "antd";

const { Text } = Typography;

const codeStyle = {
	textAlign: "left",
	minWidth: "150px",
	backgroundColor: "#f4f4f4",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
};

function createTypescriptList() {
	return typescriptData.map((item) => {
		return {
			key: item.key,
			label: item.label,
			children: (
				<>
					<Flex key={item.key} vertical align="flex-start">
						<Link target="_blanks" href={item.href}>
							<Button>Теория и практика</Button>
						</Link>
					</Flex>
					<Divider />
					<Flex vertical align="center">
						<Text style={{ marginBottom: 10, fontSize: 20 }}>
							Примеры кода:
						</Text>
						<Space
							style={{ marginBottom: 10 }}
							direction="vertical"
						>
							<pre style={codeStyle}>{item.code}</pre>
						</Space>
					</Flex>
				</>
			),
		};
	});
}

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
								<Space
									style={{ marginBottom: 10 }}
									direction="vertical"
								>
									<pre style={codeStyle}>{itemDest.text}</pre>
								</Space>
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
					<Space style={{ marginBottom: 10 }} direction="vertical">
						<Text strong type="danger">
							Плохо
						</Text>
						<pre style={codeStyle}>{item.description.bad}</pre>
						<Text strong type="success">
							Хорошо
						</Text>
						<pre style={codeStyle}>{item.description.good}</pre>
					</Space>
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

	switch (params) {
		case "practices":
			data.content = createPracticesList();
			break;
		case "libraries":
			data.content = creatLibrariesList();
			break;
		case "hooks":
			data.content = createCustomHooksList();
			break;
		case "typescript":
			data.content = createTypescriptList();
			break;
		case "html":
			data.content = createQuestion("html");
			break;
		case "css":
			data.content = createQuestion("css");
			break;
		case "js":
			data.content = createQuestion("js");
			break;
		case "react":
			data.content = createQuestion("react");
			break;
		case "web":
			data.content = createQuestion("web");
			break;
	}

	return data;
}
