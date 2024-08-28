import { Header } from "antd/es/layout/layout";
import { Flex, Image, Modal, Button } from "antd";
import { useState } from "react";
import Link from "antd/es/typography/Link";
import jsIcon from "../data/photo/js48.png";
import chatGPTIcon from "../data/photo/chatgpth48.png";

const headerStyle = {
	height: 64,
	padding: "0 24px",
	background: "#6aa2f0",
};

export default function AppHeader() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<Header style={headerStyle}>
			<Flex align="center" wrap gap="small">
				<Image onClick={showModal} preview={false} src={jsIcon} />

				<Link target="_blank" href="https://chatgpt.com/">
					<Image preview={false} src={chatGPTIcon} />
				</Link>
			</Flex>
			<Modal
				title="JavaScript"
				open={isModalOpen}
				onCancel={handleCancel}
				footer={
					<Button type="primary" onClick={handleCancel}>
						Закрыть
					</Button>
				}
			>
				<Link target="_blank" href="https://learn.javascript.ru/">
					<p>Справочник JS</p>
				</Link>
				<Link
					target="_blank"
					href="https://race-timo.gitbook.io/typescript"
				>
					<p>Справочник TS</p>
				</Link>
				<Link target="_blank" href="https://ck-editor.vercel.app/">
					<p>JS Online</p>
				</Link>
			</Modal>
		</Header>
	);
}
