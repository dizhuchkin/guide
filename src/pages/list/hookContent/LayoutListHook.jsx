import { Flex, Radio } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
	CreateContentHookPractice,
	CreateContentHookTheory,
} from "../../../utils/createHook";

const options = [
	{
		label: "Теория",
		value: 0,
	},
	{
		label: "Пример",
		value: 1,
	},
];

export default function LayoutListHook() {
	const [type, setType] = useState(0);
	const params = useParams();

	function onChange({ target: { value } }) {
		setType(value);
	}

	return (
		<>
			<Flex>
				<Radio.Group
					onChange={onChange}
					value={type}
					optionType="button"
					options={options}
				/>
			</Flex>
			<>
				{type === 0 ? (
					<CreateContentHookTheory params={params.nameHook} />
				) : (
					<CreateContentHookPractice params={params.nameHook} />
				)}
			</>
		</>
	);
}
