import { Header } from "antd/es/layout/layout";
import { Button, Flex } from "antd";
import Link from "antd/es/typography/Link";

const headerStyle = {
	height: 64,
	padding: "0 24px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
};

export default function AppHeader() {
	return (
		<Header style={headerStyle}>
			<Flex gap="small">
				<Link target="_blank" href="https://learn.javascript.ru/">
					<Button shape="round" size="large">
						JavaScript
					</Button>
				</Link>
				<Link
					target="_blank"
					href="https://code.mu/ru/javascript/typescript/book/prime/"
				>
					<Button shape="round" size="large">
						TypeScript
					</Button>
				</Link>
				<Link target="_blank" href="https://chatgpt.com/">
					<Button shape="round" size="large">
						ChatGPT
					</Button>
				</Link>
			</Flex>
		</Header>
	);
}
