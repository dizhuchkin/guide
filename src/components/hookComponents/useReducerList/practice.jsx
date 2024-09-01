import { Button, InputNumber, Flex, Space, Card } from "antd";
import { useReducer } from "react";

const buttonStyle = {
	width: 100,
	marginBottom: 5,
};

const codeStyle = {
	textAlign: "left",
	minWidth: "150px",
	backgroundColor: "#f4f4f4",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
	textWrap: "wrap",
};

export default function UseReducerPractice() {
	//Пример с счётчиком
	const initialState = 0;
	const reducer = (state, action) => {
		switch (action) {
			case "increment":
				return state + 1;
			case "decrement":
				return state - 1;
			default:
				return state;
		}
	};

	// useReducer принимает в себя также 2 параметра
	// функцию редюсера и изначальное состояние
	const [count, dispatch] = useReducer(reducer, initialState);

	// функция редюсера принимает в себя 2 параметра
	// текущее состояние и экшен, и возвращает новое состояние
	// reducer(currentState, action);
	return (
		<Space
			direction="vertical"
			size="middle"
			style={{ display: "flex", marginTop: 10 }}
		>
			<Card title="Пример">
				<Flex
					style={{ width: 200, margin: "auto" }}
					align="center"
					vertical
				>
					<InputNumber
						value={count}
						disabled
						style={{ marginBottom: 10 }}
					/>
					<Button
						style={buttonStyle}
						onClick={() => dispatch("increment")}
						type="primary"
					>
						Count++
					</Button>

					<Button
						style={buttonStyle}
						onClick={() => dispatch("decrement")}
						type="primary"
					>
						Count--
					</Button>
				</Flex>
			</Card>

			<Card title="Код">
				<pre style={codeStyle}>{`
//Пример с счётчиком
const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		default:
			return state;
	}
};

// useReducer принимает в себя также 2 параметра
// функцию редюсера и изначальное состояние
const [count, dispatch] = useReducer(reducer, initialState);

// функция редюсера принимает в себя 2 параметра
// текущее состояние и экшен, и возвращает новое состояние
// reducer(currentState, action);

<---------------------------------------------------->

<Button
	style={buttonStyle}
	onClick={() => dispatch("increment")}
	type="primary"
>
	Count++
</Button>

<Button
	style={buttonStyle}
	onClick={() => dispatch("decrement")}
	type="primary"
>
	Count--
</Button>
	`}</pre>
			</Card>
		</Space>
	);
}
