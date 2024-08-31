import { Button } from "antd";
import Typography from "antd/es/typography/Typography";
import { useState } from "react";
import { createContext, useContext } from "react";

const codeStyle = {
	textAlign: "left",
	minWidth: "150px",
	backgroundColor: "#f4f4f4",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
	textWrap: "wrap",
};

export default function UseContextPractice() {
	const StoreContext1 = createContext();

	const [data, setData] = useState({
		name: "Ritesh",
		email: "someMail@gmail.com",
		count: 0,
	});

	function click() {
		setData((prev) => {
			return {
				...prev,
				count: prev.count + 1,
			};
		});
	}

	const Child = () => {
		const value = useContext(StoreContext1);
		return (
			<>
				<Typography.Title level={4}>Дочерний элемент:</Typography.Title>
				<Typography.Title level={5}>
					Ваше имя: {value.name}
				</Typography.Title>
				<Typography.Title level={5}>
					Ваше имя: {value.email}
				</Typography.Title>
				<Typography.Title level={5}>
					Счётчик: {value.count}
				</Typography.Title>
			</>
		);
	};

	return (
		<>
			<Typography.Title level={3}>Пример</Typography.Title>

			<Button onClick={click} type="primary">
				Count++
			</Button>

			<StoreContext1.Provider value={data}>
				<Child />
			</StoreContext1.Provider>
			<Typography.Title level={3}>Код</Typography.Title>

			<pre style={codeStyle}>{`
const StoreContext1 = createContext();

const [data, setData] = useState({
	name: "Ritesh",
	email: "someMail@gmail.com",
	count: 0,
});

<---------------------------------------------------->

const Child = () => {
	const value = useContext(StoreContext1);
	return (
		<>
			<Typography.Title level={4}>Дочерний элемент:</Typography.Title>
			<Typography.Title level={5}>
				Ваше имя: {value.name}
			</Typography.Title>
			<Typography.Title level={5}>
				Ваше имя: {value.email}
			</Typography.Title>
			<Typography.Title level={5}>
				Счётчик: {value.count}
			</Typography.Title>
		</>
	);
};

<---------------------------------------------------->

<StoreContext1.Provider value={data}>
	<Child />
</StoreContext1.Provider>
	`}</pre>
		</>
	);
}
