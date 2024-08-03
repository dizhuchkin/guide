import React from "react";
import { Collapse, Divider, Flex, Button } from "antd";
import Link from "antd/es/typography/Link";
import { ReadOutlined } from "@ant-design/icons";
import createContentDop from "../../../utils/createDop";
import { useParams } from "react-router-dom";

export default function LayoutListDop() {
	const params = useParams();

	const content = createContentDop(params.nameDop);

	return (
		<>
			<Flex align="center">
				<Link target="_blanks" href={content.href}>
					<Button type="primary">
						Перейти в источник <ReadOutlined />
					</Button>
				</Link>
			</Flex>
			<Divider />
			<Collapse items={content.content} />
		</>
	);
}
